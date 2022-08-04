import React, { useEffect, useState } from "react";
import Calendario from "./Calendario";
import * as S from "./ListasCompras.styles";

const apiAirtable = 'https://api.airtable.com/v0/app4vUGC2nxXBaIY7/Produtos?fields%5B%5D=id&fields%5B%5D=id_usuario&fields%5B%5D=nome&fields%5B%5D=repeticao&fields%5B%5D=repeticao_dia&fields%5B%5D=encerramento&fields%5B%5D=data_criacao'

function ListasCompras() {

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
                console.log('result', result)
            })
            .catch(error => console.log('error', error));
    }, [])


    return (
        <S.Container>
            <h1>Listas de Compra</h1>
            <Calendario />
        </S.Container>
    );
}

export default ListasCompras;
