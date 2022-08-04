import React, { useState } from "react";
import * as S from "./cadastro-styles";

function Cadastro() {
  const [productName, setProductName] = useState("");
  const [repetition, setRepetition] = useState(0);
  const [repetitionDay, setRepetitionDay] = useState(0);
  const [endindDay, setEndingDay] = useState(1660521600);

  const postData = (e) => {
    e.preventDefault();
    // Airtable Connection and Configuration
    var Airtable = require("airtable");
    var base = new Airtable({ apiKey: "keyIQRTXBdJyaVJaz" }).base(
      "app4vUGC2nxXBaIY7"
    );

    // Creating a new record and posting on Airtable
    base("Produtos").create(
      {
        id_usuario: "0277a69cf889d21e9614966db20e858a",
        nome: productName,
        repeticao: parseInt(repetition),
        repeticao_dia: parseInt(repetitionDay),
        encerramento: endindDay,
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
  };

  const handleDate = (e) => {
    var getDate = e.target.value;
    var SelectedDate = new Date(getDate).getTime() / 1000;
    console.log('getDate', getDate)
    const teste = document.write(getDate.toGMTString());
    console.log('teste', teste)
    setEndingDay(SelectedDate);
  };

  return (
    <S.Container>
      <h1>Cadastro de Produtos</h1>

      {/* Product registration form */}
      <S.Form onSubmit={postData}>
        {/* Insert title */}
        <div>
          <S.Input
            type="text"
            name="product-name"
            placeholder="Nome do produto"
            onChange={(e) => setProductName(e.target.value)}
          />
          {/* <label htmlFor="product-name">Nome do produto</label> */}
        </div>

        {/* Insert how many times repetition will occur */}
        <S.Div>
          <S.Label htmlFor="repetition">Repetir a cada</S.Label>
          <S.InputNumber
            type="number"
            min="0"
            step="1"
            name="repetition"
            id="repetition"
            onChange={(e) => setRepetition(e.target.value)}
          />
          <S.Label>semana(s)</S.Label>
        </S.Div>

        {/* Select product recurrence by week day */}
        <S.Div>
          <S.Label htmlFor="weekday">Dia da semana:</S.Label>
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
          <S.Label>Termina:</S.Label>
          <S.Div>
            <input type="radio" name="repetition-ends" id="never" />
            <S.Label htmlFor="repetition-ends-never">Nunca</S.Label>
          </S.Div>
          <div>
            <input type="radio" name="repetition-ends" id="date" />
            <S.Label>Em: </S.Label>
            <S.InputDate type="date" onChange={handleDate} />
          </div>
        </S.FlexColumnDiv>
        <S.Button type="submit">Cadastrar</S.Button>
      </S.Form>
    </S.Container>
  );
}

export default Cadastro;
