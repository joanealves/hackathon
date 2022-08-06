import React, { useEffect, useState } from "react";
import Calendario from "./CalendarioCompleto";
import * as S from "./ListaCompleta.styles";
import moment from 'moment'

const apiAirtable = 'https://api.airtable.com/v0/app4vUGC2nxXBaIY7/Produtos?fields%5B%5D=id&fields%5B%5D=id_usuario&fields%5B%5D=nome&fields%5B%5D=repeticao&fields%5B%5D=repeticao_dia&fields%5B%5D=encerramento&fields%5B%5D=data_criacao'

let newLista = []
function ListaCompleta() {
    const [listProducts, setlistProducts] = useState()


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

    const formattedListProducts = () => {
        const newList = listProducts?.map(item => {
            let data_criacao = new Date(item?.fields?.data_criacao * 1000)
            let data_encerramento = new Date(item?.fields?.encerramento * 1000)

            let firstDayOfWeek = moment(data_criacao).weekday(Number(0)).format('YYYY-MM-DD ')
            let moment_last_day_of_Week = moment(data_criacao).weekday(Number(6)).format('YYYY-MM-DD ')
            var splited_last_day_of_Week = moment_last_day_of_Week.split('-')
            var last_day_of_Week = new Date(splited_last_day_of_Week[0], (splited_last_day_of_Week[1] - 1), splited_last_day_of_Week[2])

            // primeira recorrência - de acordo com a repeticao Dia
            var data_dia_semana = moment(firstDayOfWeek).weekday(Number(item?.fields?.repeticao_dia)).format('YYYY-MM-DD')
            var splited_data_dia_semana = data_dia_semana.split('-')
            var primeiraRecorrencia = new Date(splited_data_dia_semana[0], (splited_data_dia_semana[1] - 1), splited_data_dia_semana[2])


            let somaDias = 7 + primeiraRecorrencia.getDay()
            let isDate = new Date('2022', Number(splited_data_dia_semana[1] - 1), somaDias)


            newLista = [...newLista, { title: item?.fields?.nome, start: new Date(isDate), end: new Date(isDate) }]
            let datateste = isDate
            while (datateste < data_encerramento) {
                datateste.setDate(datateste.getDate() + (7 * item?.fields?.repeticao))
                newLista = [...newLista, { title: item?.fields?.nome, start: new Date(datateste), end: new Date(datateste) }]
            }


            let soma = 0
            if (data_criacao.getDay() - item?.fields?.repeticao_dia < 0) {
                soma = (data_criacao.getDay() - primeiraRecorrencia) * -1 // retorno em timestemp
                var data = new Date(soma)
                newLista = [...newLista, { title: item?.fields?.nome, start: data, end: data }]
            }

        })
        return newList
    }

    const list = formattedListProducts()

    console.log('newLista', newLista)
    return (
        <S.Container>
            <h1>Listas de Compra por dia</h1>
            {newLista && <Calendario listProducts={newLista} />}
        </S.Container>
    );
}

export default ListaCompleta;