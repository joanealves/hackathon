import styled from "styled-components";
// import { css } from "styled-components";

export const Container = styled.div`
  width: 375px;
  background-color: var(--shape);
  color: var(--green_dark);
`;

export const Form = styled.form`
  padding: 20px;
`;

export const FlexDiv = styled.div`
  display: flex;
`;

export const RadioButton = styled.input`
  color: var(--green_dark);
  margin-left: 15px;
`;

export const FlexColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Div = styled.div`
  padding: 10px 0 15px 0;
`;

export const Input = styled.input`
  width: 360px;
  height: 60px;
  border: none;
  border-radius: 10px;
  color: var(--green_dark);
  font-size: 18px;
  &:placeholder {
    color: var(--green_light);
    font-size: 18px;
  }
  &:focus {
    border: 1px solid var(--shape);
  }
`;
