import React, { useEffect, useState } from "react";
import Calendario from "./CalendarioCompleto";
import * as S from "./ListaCompleta.styles";
import moment from 'moment'
import { Modal } from "../../components/modal-calendario/ModalCalendario.styles";
import ModalCalendario from "../../components/modal-calendario/ModalCalendario";
import { RiArrowRightCircleFill, RiArrowLeftCircleFill } from "react-icons/ri";

const apiAirtable = 'https://api.airtable.com/v0/app4vUGC2nxXBaIY7/Produtos?fields%5B%5D=id&fields%5B%5D=id_usuario&fields%5B%5D=nome&fields%5B%5D=repeticao&fields%5B%5D=repeticao_dia&fields%5B%5D=encerramento&fields%5B%5D=data_criacao'

let newLista = []

let isNewDate = new Date()
let formatedNewDate = new Date()
let today = isNewDate.getDate()
let todayDate = formatedNewDate.setDate(today)
let formatedTodayDate = new Date(todayDate)
let todayDateSplited = formatedTodayDate?.toString()?.split(' ')
let today_format_dia = `${todayDateSplited[2]}-${todayDateSplited[1]}-${todayDateSplited[3]}`

function ListaCompleta() {

    const [listProducts, setlistProducts] = useState()
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [newProdutosDia, setNewProdutosDia] = useState([])
    const [day, setDay] = useState(today)

    useEffect(() => {
        newLista = []
        airtable()
        produtosDia()
    }, [])




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



    if (listProducts) {
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

            newLista = [...newLista, { title: item?.fields?.nome, start: new Date(datateste), end: new Date(datateste), id: item?.id }]

            while (datateste < data_encerramento) {
                datateste.setDate(datateste.getDate() + 7 * item?.fields?.repeticao)

                if (datateste < data_encerramento) {
                    newLista = [
                        ...newLista, {
                            title: item?.fields?.nome,
                            start: new Date(datateste),
                            end: new Date(datateste),
                            id: item?.id,
                        }
                    ]

                }
            }
        }
    }

    // Lógica para listar produtos por dia 
    const produtosDia = () => {
        const lista = newLista.filter((prod) => {
            let dataProduto = prod?.start?.toString()?.split(' ')
            let format_dia = `${dataProduto[2]}-${dataProduto[1]}-${dataProduto[3]}`

            return format_dia === today_format_dia
        })

        console.log('lista', lista)
        return lista
    }

    const newProdutos = produtosDia()
    console.log('newProdutos', newProdutos)

    console.log('today_format_dia', today_format_dia)


    const pagination = () => {
        setDay((state) => state + 1)
        produtosDia()
        console.log('pagination rodou')
    }
    console.log('today', today)
    console.log('day', day)



    return (
        <S.Container>

            <h1>Lista de Compra por dia</h1>
            <h2>{day}</h2>
            {newProdutos && (
                <S.Section>
                    {newProdutos?.map((item) => (
                        <S.Produto>
                            <p>{item.title}</p>
                        </S.Produto>
                    ))}
                </S.Section>
            )}


            {/* today = +1 */}
            <S.ContainerBtn>

                <S.BtnPagination >
                    <RiArrowLeftCircleFill width="12" />
                </S.BtnPagination>

                <S.BtnPagination onClick={pagination} >
                    <RiArrowRightCircleFill />
                </S.BtnPagination>
            </S.ContainerBtn>
            {/* 
                clicar no butão = onclick
                criar uma função pra rodar toda vez que clicar
                acrescentar + 1 a variável today
                chamar a função produtosDia filtrando a nova data (today)
            */}

            {isOpenModal && (
                <ModalCalendario setIsOpenModal={setIsOpenModal} />
            )}


        </S.Container>
    );
}

export default ListaCompleta;



