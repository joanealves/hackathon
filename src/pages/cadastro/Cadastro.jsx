import React, { useState } from "react";
import * as S from "./cadastro-styles";
import Modal from "./Modal";
import useModal from "./useModal";

function Cadastro() {
  const [productName, setProductName] = useState("");
  const [repetition, setRepetition] = useState(0);
  const [repetitionDay, setRepetitionDay] = useState(0);
  const [endingDay, setEndingDay] = useState(0);
  const [isDateDisabled, setIsDateDisabled] = useState(true);
  const [isRequired, setIsRequired] = useState(false);
  const { isShowing, toggle } = useModal();

  // Post data to Airtable
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
        id_usuario: JSON.parse(localStorage.getItem("users"))[0],
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
    setIsDateDisabled(true);
    toggle();
  };

  const handleDate = (e) => {
    var getDate = e.target.value;
    var SelectedDate = new Date(getDate).getTime() / 1000;
    console.log("getDate", getDate);
    setEndingDay(SelectedDate);
  };

  const handleRadio = () => {
    setIsDateDisabled(false);
    setIsRequired(true);
  };

  return (
    <S.Container>
      <h1>Cadastro de Produtos</h1>

      {/* Product registration form */}
      <S.Form onSubmit={postData}>
        {/* Insert title */}
        <S.Div>
          <input
            type="text"
            name="product-name"
            placeholder="Nome do produto"
            minLength={3}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </S.Div>

        {/* Insert how many times repetition will occur */}
        <S.Div>
          <label htmlFor="repetition">Repetir a cada </label>
          <input
            type="number"
            min="1"
            step="1"
            name="repetition"
            id="repetition"
            onChange={(e) => setRepetition(e.target.value)}
            required
          />
          <span>semana(s)</span>
        </S.Div>

        {/* Select product recurrence by week day */}
        <S.Div>
          <label htmlFor="weekday">Dia da semana:</label>
        </S.Div>

        <select
          name="weekday"
          onChange={(e) => setRepetitionDay(e.target.value)}
          defaultValue={""}
          required
        >
          <option disabled value="">
            -- Selecione --
          </option>
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
        </select>

        {/* Select when repetition will end */}
        <S.RadioGroup>
          <span>Termina:</span>
          <div>
            <input
              type="radio"
              name="repetition-ends"
              id="never"
              required
              onChange={() => setIsDateDisabled(true)}
            />
            <label htmlFor="repetition-ends-never">Nunca</label>
          </div>
          <div>
            <input
              type="radio"
              name="repetition-ends"
              id="select-date"
              onChange={handleRadio}
            />
            <label>Em: </label>
            <input
              type="date"
              id="date"
              onChange={handleDate}
              disabled={isDateDisabled}
              required={isRequired}
            />
          </div>
        </S.RadioGroup>
        <button type="submit">Cadastrar</button>
      </S.Form>
      <Modal isShowing={isShowing} hide={toggle} />
    </S.Container>
  );
}

export default Cadastro;
