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

    setEndingDay(SelectedDate);
  };

  return (
    <S.Container>
      <h1>Cadastro de Produtos</h1>

      {/* Product registration form */}
      <S.Form onSubmit={postData}>
        {/* Insert title */}
        <label htmlFor="product-name"></label>
        <input
          type="text"
          name="product-name"
          placeholder="Nome do produto"
          onChange={(e) => setProductName(e.target.value)}
        />

        {/* Insert how many times repetition will occur */}
        <div>
          <label htmlFor="repetition">Repetir a cada</label>
          <input
            type="number"
            min="0"
            step="1"
            name="repetition"
            id="repetition"
            onChange={(e) => setRepetition(e.target.value)}
          />
          {/* Select repetition step (day, week, month) */}
          <span>semana(s)</span>
        </div>

        {/* Select product recurrence by week day */}
        <div>
          <label htmlFor="week-repetition">Repetir:</label>
        </div>
        <S.FlexDiv onChange={(e) => setRepetitionDay(e.target.value)}>
          <S.RadioButton type="radio" name="weekday" id="sun" value="0" />
          <label htmlFor="weekday">D</label>
          <S.RadioButton type="radio" name="weekday" id="mon" value="1" />
          <label htmlFor="">S</label>
          <S.RadioButton type="radio" name="weekday" id="tue" value="2" />
          <label htmlFor="">T</label>
          <S.RadioButton type="radio" name="weekday" id="wed" value="3" />
          <label htmlFor="">Q</label>
          <S.RadioButton type="radio" name="weekday" id="thu" value="4" />
          <label htmlFor="">Q</label>
          <S.RadioButton type="radio" name="weekday" id="fri" value="5" />
          <label htmlFor="">S</label>
          <S.RadioButton type="radio" name="weekday" id="sat" value="6" />
          <label htmlFor="">S</label>
        </S.FlexDiv>

        {/* Select when repetition will end */}
        <S.FlexColumnDiv>
          <label>Termina em:</label>
          <div>
            <input type="radio" name="repetition-ends" id="never" />
            <label htmlFor="repetition-ends-never">Nunca</label>
          </div>
          <div>
            <input type="radio" name="repetition-ends" id="date" />
            <label>Em: </label>
            <input type="date" onChange={handleDate} />
          </div>
        </S.FlexColumnDiv>
        <button type="submit">+ Cadastrar</button>
      </S.Form>
    </S.Container>
  );
}

export default Cadastro;
