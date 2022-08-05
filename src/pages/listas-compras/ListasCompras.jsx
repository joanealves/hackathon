import React, { useEffect, useState } from "react";
import Calendario from "./Calendario";
import * as S from "./ListasCompras.styles";

const apiAirtable = 'https://api.airtable.com/v0/app4vUGC2nxXBaIY7/Produtos?fields%5B%5D=id&fields%5B%5D=id_usuario&fields%5B%5D=nome&fields%5B%5D=repeticao&fields%5B%5D=repeticao_dia&fields%5B%5D=encerramento&fields%5B%5D=data_criacao'

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Juny", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function ListasCompras() {

    const [listProducts, setlistProducts] = useState()

    useEffect(() => {
        // Airtable Connection 
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

                // lista formatada para enviar dados ao Calendário
                const formattedListProducts = () => {
                    const newList = result?.records?.map(item => {

                        // formatação data Inicial
                        const newDateStart = new Date(item.fields?.data_criacao * 1000)
                        const splitedStart = newDateStart?.toString()?.split(' ')
                        const year = splitedStart?.[3]
                        const month = splitedStart?.[1]
                        const day = splitedStart?.[2]
                        const mesIndexOf = months.indexOf(month)

                        const repetirDia = item.fields.repeticao_dia

                        return {
                            title: item.fields?.nome,
                            start: new Date(year, mesIndexOf, repetirDia),
                            end: new Date(year, mesIndexOf, repetirDia),
                        }
                    })
                    return newList
                }

                const list = formattedListProducts()
                setlistProducts(list)
            })
            .catch(error => console.log('error', error));
    }, [])


    return (
        <S.Container>
            <h1>Listas de Compra</h1>
            {listProducts && <Calendario listProducts={listProducts} />}
        </S.Container>
    );
}

export default ListasCompras;
