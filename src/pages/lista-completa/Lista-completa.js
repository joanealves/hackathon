import React, { useEffect, useState } from "react";
import * as S from "./ListaCompleta.styles";
import moment from 'moment'
import ModalCalendario from "../../components/modal-calendario/ModalCalendario";
import { RiArrowRightCircleFill, RiArrowLeftCircleFill } from "react-icons/ri";
import { FcCheckmark } from "react-icons/fc";
import { AiOutlinePlus } from "react-icons/ai";
// import { baseURL } from "../../services/api";

// const apiAirtable =
//     baseURL +
//     "?fields%5B%5D=id&fields%5B%5D=id_usuario&fields%5B%5D=nome&fields%5B%5D=repeticao&fields%5B%5D=repeticao_dia&fields%5B%5D=encerramento&fields%5B%5D=data_criacao";

const apiAirtable = 'https://api.airtable.com/v0/app4vUGC2nxXBaIY7/Produtos?fields%5B%5D=id&fields%5B%5D=id_usuario&fields%5B%5D=nome&fields%5B%5D=repeticao&fields%5B%5D=repeticao_dia&fields%5B%5D=encerramento&fields%5B%5D=data_criacao&fields%5B%5D=comprado'
let newLista = []

let isNewDate = new Date()
let formatedNewDate = new Date()
let today = isNewDate.getDate()
function ListaCompleta() {

    const [listProducts, setlistProducts] = useState()
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [day, setDay] = useState(today)

    useEffect(() => {
        newLista = []
        airtable()
        produtosDia()
    })

    let todayDate = formatedNewDate.setDate(day)
    let formatedTodayDate = new Date(todayDate)
    let todayDateSplited = formatedTodayDate?.toString()?.split(' ')
    let today_format_dia = `${todayDateSplited[2]}-${todayDateSplited[1]}-${todayDateSplited[3]}`

    // Método para buscar produtos do airtable
    const airtable = () => {
        let newResult = []
        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer keyIQRTXBdJyaVJaz");
        myHeaders.append("Cookie", "brw=brwZr09Lc4XQ6bGuH");

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(apiAirtable, requestOptions)
            .then(response => response.json())
            .then(result => {
                result && setlistProducts(result?.records)
            })
            .catch(error => console.log('error', error));

        return newResult
    }

    // Itera a lista para ajustar as ocorrências dos produtos
    const listAirtable = () => {
        if (listProducts) {
            newLista = []
            for (let item of listProducts) {

                let data_criacao = new Date(item?.fields?.data_criacao * 1000)
                let data_encerramento = new Date(item?.fields?.encerramento * 1000)


                let firstDayOfWeek = moment(data_criacao).weekday(Number(0)).format('YYYY-MM-DD ')

                if (data_criacao > firstDayOfWeek) {
                    continue;
                }

                if (data_encerramento < firstDayOfWeek) {
                    continue;
                }
                let somadedias = 0;

                if (data_criacao.getDay() > item?.fields.repeticao_dia) {
                    somadedias = 7 - (data_criacao.getDay() - item?.fields.repeticao_dia)
                } else {
                    somadedias = (data_criacao.getDay() - item?.fields.repeticao_dia) * -1
                }

                let primeiraOcorrencia = new Date(data_criacao.setDate(data_criacao.getDate() + somadedias))

                let datateste = primeiraOcorrencia

                newLista = [
                    ...newLista,
                    {
                        title: item?.fields?.nome,
                        start: new Date(datateste),
                        end: new Date(datateste),
                        id: item?.id,
                        comprado: item?.fields?.comprado || false,
                        repeticao_dia: item?.fields?.repeticao_dia,
                        repeticao: item?.fields?.repeticao

                    }
                ]

                while (datateste < data_encerramento) {
                    datateste.setDate(datateste.getDate() + 7 * item?.fields?.repeticao)

                    if (datateste < data_encerramento) {
                        newLista = [
                            ...newLista, {
                                title: item?.fields?.nome,
                                start: new Date(datateste),
                                end: new Date(datateste),
                                id: item?.id,
                                comprado: item?.fields?.comprado || false
                            }
                        ]

                    }
                }
            }
        }
    }

    listAirtable()

    // Lógica para listar produtos por dia 
    const produtosDia = () => {

        const lista = newLista?.filter((prod) => {
            let dataProduto = prod?.start?.toString()?.split(' ')
            let format_dia = `${dataProduto[2]}-${dataProduto[1]}-${dataProduto[3]}`

            return format_dia === today_format_dia
        })

        return lista
    }

    const newProdutos = newLista && produtosDia()

    // Método para alterar o dia apresentado
    const pagination = (item = false) => {
        if (item) {
            setDay((state) => state + 1)
        } else {
            setDay((state) => state - 1)
        }

        produtosDia()
    }

    const handleCheckmark = (item = false) => {
        // Atualiza o produto como comprado
        let Airtable = require('airtable');
        var base = new Airtable({ apiKey: 'keyIQRTXBdJyaVJaz' }).base('app4vUGC2nxXBaIY7');

        base('Produtos').update([
            {
                "id": item?.id,
                "fields": {
                    "nome": item?.title,
                    "comprado": !item.comprado,
                }
            },

        ], function (err, records) {
            if (err) {
                console.error(err);
                return;
            }

        });

        airtable()
        listAirtable()
        produtosDia()
    }

    const isPurchase = (purchase) => {
        return purchase ? <FcCheckmark /> : <AiOutlinePlus />
    }

    return (
        <S.Container>
            <S.Header>
                <h1>Produtos do Dia</h1>
                <div>
                    <h2>{day}</h2>
                    <span>{todayDateSplited[1]}</span><span>{todayDateSplited[3]}</span>
                </div>
            </S.Header>
            {newProdutos.length > 0 ? (
                <S.Section>
                    {newProdutos?.map((item, index) => (
                        <S.Produto key={index} purchase={item?.comprado}>
                            <p>{item.title}</p>
                            <S.CheckmarkButton onClick={() => handleCheckmark(item)} title={!item?.comprado && 'Comprar Item'}>
                                {isPurchase(item?.comprado)}
                            </S.CheckmarkButton>
                        </S.Produto>
                    ))}
                </S.Section>
            ) : (
                <p>Não temos produtos registrados nesse dia</p>
            )}
            <S.ContainerBtn>
                <S.BtnPagination onClick={() => pagination()}>
                    <RiArrowLeftCircleFill />
                </S.BtnPagination>
                <S.BtnPagination onClick={() => pagination(true)} >
                    <RiArrowRightCircleFill />
                </S.BtnPagination>
            </S.ContainerBtn>
            {isOpenModal && (
                <ModalCalendario setIsOpenModal={setIsOpenModal} />
            )}

        </S.Container>
    );
}

export default ListaCompleta;



