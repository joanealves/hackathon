import React, { useEffect, useState } from "react";
import Calendario from "./CalendarioCompleto";
import * as S from "./ListaCompleta.styles";
import moment from 'moment'
import { Modal } from "../../components/modal-calendario/ModalCalendario.styles";
import ModalCalendario from "../../components/modal-calendario/ModalCalendario";

const apiAirtable = 'https://api.airtable.com/v0/app4vUGC2nxXBaIY7/Produtos?fields%5B%5D=id&fields%5B%5D=id_usuario&fields%5B%5D=nome&fields%5B%5D=repeticao&fields%5B%5D=repeticao_dia&fields%5B%5D=encerramento&fields%5B%5D=data_criacao'

let newLista = []

function ListaCompleta() {

    const [listProducts, setlistProducts] = useState()
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(false)

    useEffect(() => {
        newLista = []
        airtable()
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

            newLista = [...newLista, { title: item?.fields?.nome, start: new Date(datateste), end: new Date(datateste) }]

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

    console.log('isOpenModal', isOpenModal)
    return (
        <S.Container>

            <h1>Lista de Compra por dia</h1>
            {isOpenModal && (
                <ModalCalendario setIsOpenModal={setIsOpenModal} />
            )}
            {newLista && (
                <Calendario
                    listProducts={newLista}
                    setIsOpenModal={setIsOpenModal}
                    setSelectedProduct={setSelectedProduct}
                    selectedProduct={selectedProduct}
                />
            )}


        </S.Container>
    );
}

export default ListaCompleta;

