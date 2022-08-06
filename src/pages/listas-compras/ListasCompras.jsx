import React, { useEffect, useState } from "react";
import Calendario from "./Calendario";
import * as S from "./ListasCompras.styles";
import moment from 'moment'

const apiAirtable = 'https://api.airtable.com/v0/app4vUGC2nxXBaIY7/Produtos?fields%5B%5D=id&fields%5B%5D=id_usuario&fields%5B%5D=nome&fields%5B%5D=repeticao&fields%5B%5D=repeticao_dia&fields%5B%5D=encerramento&fields%5B%5D=data_criacao'

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Juny", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
let newLista = []

function ListasCompras() {

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

  if (listProducts) {

    for (let item of listProducts) {
      let data_criacao = new Date(item?.fields?.data_criacao * 1000)
      let data_encerramento = new Date(item?.fields?.encerramento * 1000)
      console.log('data_criacao', item?.fields?.nome, data_criacao)
      console.log('data_encerramento', item?.fields?.nome, data_encerramento)


      let firstDayOfWeek = moment(data_criacao).weekday(Number(0)).format('YYYY-MM-DD ')
      let moment_last_day_of_Week = moment(data_criacao).weekday(Number(6)).format('YYYY-MM-DD ')
      var splited_last_day_of_Week = moment_last_day_of_Week.split('-')
      var last_day_of_Week = new Date(splited_last_day_of_Week[0], (splited_last_day_of_Week[1] - 1), splited_last_day_of_Week[2])


      if (data_criacao > firstDayOfWeek) {
        continue;
      }

      if (data_encerramento < firstDayOfWeek) {
        continue;
      }
      let somadedias = 0;


      if (data_criacao.getDay() > item?.fields.repeticao_dia) {
        // console.log('if', item?.fields?.nome)
        somadedias = 7 - (data_criacao.getDay() - item?.fields.repeticao_dia)
        // console.log('somadedias if', somadedias)
        let primeiraOcorrencia = new Date(data_criacao.setDate(data_criacao.getDate() + somadedias))
        console.log('Primeira ocorrencia: ', item?.fields?.nome, primeiraOcorrencia)
      } else {
        somadedias = (data_criacao.getDay() - item?.fields.repeticao_dia) * -1
      }

      let primeiraOcorrencia = new Date(data_criacao.setDate(data_criacao.getDate() + somadedias))
      console.log('Primeira ocorrencia: ', item?.fields?.nome, primeiraOcorrencia)

      let datateste = primeiraOcorrencia

      newLista = [...newLista, { title: item?.fields?.nome, start: new Date(datateste), end: new Date(datateste) }]

      while (datateste < data_encerramento) {
        datateste.setDate(datateste.getDate() + 7 * item?.fields?.repeticao)

        if (datateste < data_encerramento) {
          console.log('menos')
          newLista = [...newLista, { title: item?.fields?.nome, start: new Date(datateste), end: new Date(datateste) }]
        }
      }
    }
  }


  return (
    <S.Container>
      <h1>Listas de Compra</h1>
      {newLista && <Calendario listProducts={newLista} />}
    </S.Container>
  );
}

export default ListasCompras;

