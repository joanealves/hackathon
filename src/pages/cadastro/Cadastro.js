import React from "react";
import * as S from "./cadastro-styles";

function Cadastro() {
  return (
    <S.Container>
      <h1>Cadastro de Produtos</h1>

      {/* Product registration form */}
      <S.Form>
        {/* Insert title */}
        <input type="text" placeholder="Adicionar nome do produto" />

        {/* Insert how many times repetition will occur */}
        <div>
          <label htmlFor="repetition">Repetir a cada</label>
          <input
            type="number"
            min="0"
            step="1"
            name="repetition"
            id="repetition"
          />
          {/* Select repetition step (day, week, month) */}
          <select
            name="repetition-step"
            id="repetition-step"
            placeholder="Não se repete"
          >
            <option value="repetition-step-week">semana</option>
            <option value="repetition-step-month">mês</option>
          </select>
        </div>

        {/* Select product recurrence by week day */}
        <div>
          <label htmlFor="week-repetition">Repetir:</label>
          <S.FlexDiv>
            <S.WeekButtons>D</S.WeekButtons>
            <S.WeekButtons>S</S.WeekButtons>
            <S.WeekButtons>T</S.WeekButtons>
            <S.WeekButtons>Q</S.WeekButtons>
            <S.WeekButtons>Q</S.WeekButtons>
            <S.WeekButtons>S</S.WeekButtons>
            <S.WeekButtons>S</S.WeekButtons>
          </S.FlexDiv>
        </div>

        {/* Select when repetition will end */}
        <S.FlexColumnDiv>
          <label>Termina em:</label>
          <div>
            <input
              type="radio"
              name="repetition-ends"
              value="never"
              id="never"
            />
            <label htmlFor="repetition-ends-never">Nunca</label>
          </div>
          <div>
            <input type="radio" name="repetition-ends" value="date" id="date" />
            <label htmlFor="repetition-ends-date">Em</label>
          </div>
          <div>
            <input
              type="radio"
              name="repetition-ends"
              value="after"
              id="after"
            />
            <label htmlFor="repetition-ends-after">Após</label>
          </div>
        </S.FlexColumnDiv>
      </S.Form>
    </S.Container>
  );
}

export default Cadastro;
