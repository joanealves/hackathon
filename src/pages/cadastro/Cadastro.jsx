import React, { useState } from "react";

import * as S from "./cadastro-styles";
import Modal from "../../components/modal-cadastro/Modal";
import useModal from "../../components/modal-cadastro/useModal";
import { baseURL } from "../../services/api";

function Cadastro() {
  // Product fields states
  const [productName, setProductName] = useState("");
  const [repetition, setRepetition] = useState(0);
  const [repetitionDay, setRepetitionDay] = useState(0);
  const [endingDay, setEndingDay] = useState(0);

  // Radio buttons and date states
  const [isDateDisabled, setIsDateDisabled] = useState(true);
  const [isRequired, setIsRequired] = useState(false);

  // Modal state
  const { isShowing, toggle } = useModal();

  // Post data to Airtable
  const postData = (e) => {
    e.preventDefault();

    fetch(baseURL, {
      method: "POST",
      headers: {
        Authorization: "Bearer keyIQRTXBdJyaVJaz",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              id_usuario: JSON.parse(localStorage.getItem("users"))[0],
              nome: productName,
              repeticao: parseInt(repetition),
              repeticao_dia: parseInt(repetitionDay),
              encerramento: endingDay,
              data_criacao: new Date().getTime() / 1000,
            },
          },
        ],
      }),
    })
      .then((response) => response.json(toggle()))
      .catch((err) => console.log(err));

    e.target.reset();
    // Disable date input
    setIsDateDisabled(true);
  };

  const handleDate = (e) => {
    var getDate = e.target.value;
    var SelectedDate = new Date(getDate).getTime() / 1000;
    setEndingDay(SelectedDate);
  };

  const handleRadio = (e) => {
    if (e.target.value !== "never") {
      setIsDateDisabled(false);
      setIsRequired(true);
    } else if (e.target.value === "never") {
      document.getElementById("date").value = "";
    }
  };

  return (
    <S.Container>
      <div className="headerCadastro">
        <S.TitleCadastro>
          <div></div>
          <p>
            CADASTRO <span className="hideTitle">DE PRODUTOS</span>
          </p>
          <div></div>
        </S.TitleCadastro>
      </div>

      {/* Product registration form */}
      <S.Form onSubmit={postData}>
        {/* Insert title */}
        <S.Div>
          <input
            type="text"
            name="product-name"
            placeholder="Nome do produto"
            pattern="^[a-zA-Z\u00C0-\u00FF\s+/i]+$"
            title="O nome do produto deve conter apenas letras"
            minLength={3}
            onChange={(e) => setProductName(e.target.value.trim())}
            required
          />
        </S.Div>

        {/* Insert how many times repetition will occur */}
        <S.Div>
          <label htmlFor="repetition">Repetir a cada </label>
          <input
            type="number"
            min="0"
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
        <S.RadioGroup onChange={handleRadio}>
          <span>Termina:</span>
          <div>
            <input
              type="radio"
              name="repetition-ends"
              id="never"
              value="never"
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
              value="end-date"
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
