import React, { useState } from "react";

import * as S from "./cadastro-styles";

function Cadastro() {
  const [productName, setProductName] = useState("");
  const [repetition, setRepetition] = useState(0);
  const [repetitionDay, setRepetitionDay] = useState(0);
  const [endingDay, setEndingDay] = useState(0);

  // Post data to Airtable
  const postData = (e) => {
    e.preventDefault();
    // Airtable Connection and Configuration
    var Airtable = require("airtable");
    var base = new Airtable({ apiKey: "keyIQRTXBdJyaVJaz" }).base(
      "app4vUGC2nxXBaIY7"
    );

    // Pegar no localStorage os dados do id_usuario
    // Creating a new record and posting on Airtable
    base("Produtos").create(
      {
        id_usuario: "0277a69cf889d21e9614966db20e858a",
        nome: productName,
        repeticao: parseInt(repetition),
        repeticao_dia: parseInt(repetitionDay),
        encerramento: endingDay,
        data_criacao: new Date().getTime() / 1000,
      },
      function (err, record) {
        if (err) {
          console.error(err);
          return;
        }
        console.log(record.getId());
      }
    );
    e.target.reset();
  };

  const handleDate = (e) => {
    var getDate = e.target.value;
    var SelectedDate = new Date(getDate).getTime() / 1000;
    console.log("getDate", getDate);
    setEndingDay(SelectedDate);
  };

  return (
    <S.Container>
      <h1>Cadastro de Produtos</h1>

      {/* Product registration form */}
      <S.Form onSubmit={postData}>
        {/* Insert title */}
        <div>
          <input
            type="text"
            name="product-name"
            placeholder="Nome do produto"
            onChange={(e) => setProductName(e.target.value)}
          />
          {/* <label htmlFor="product-name">Nome do produto</label> */}
        </div>

        {/* Insert how many times repetition will occur */}
        <S.Div>
          <label htmlFor="repetition">Repetir a cada</label>
          <input
            type="number"
            min="0"
            step="1"
            name="repetition"
            id="repetition"
            onChange={(e) => setRepetition(e.target.value)}
          />
          <label>semana(s)</label>
        </S.Div>

        {/* Select product recurrence by week day */}
        <S.Div>
          <label htmlFor="weekday">Dia da semana:</label>
        </S.Div>

        <S.Select
          name="weekday"
          onChange={(e) => setRepetitionDay(e.target.value)}
        >
          <option id="sun" value="0">
            Domingo
          </option>
          <option id="mon" value="1">
            Segunda
          </option>
          <option id="tue" value="2">
            Terça
          </option>
          <option id="wed" value="3">
            Quarta
          </option>
          <option id="thu" value="4">
            Quinta
          </option>
          <option id="fri" value="5">
            Sexta
          </option>
          <option id="sat" value="6">
            Sábado
          </option>
        </S.Select>

        {/* Select when repetition will end */}
        <S.FlexColumnDiv>
          <label>Termina:</label>
          <S.Div>
            <input type="radio" name="repetition-ends" id="never" />
            <label htmlFor="repetition-ends-never">Nunca</label>
          </S.Div>
          <div>
            <input type="radio" name="repetition-ends" id="date" />
            <label>Em: </label>
            <S.InputDate type="date" onChange={handleDate} />
          </div>
        </S.FlexColumnDiv>
        <button type="submit">Cadastrar</button>
      </S.Form>
    </S.Container>
  );
}

export default Cadastro;
