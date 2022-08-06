import styled from "styled-components";

export const Container = styled.div`
  width: 375px;
  margin: 30px auto;
  padding: 20px;
  color: var(--green_dark);
  // background-color: var(--white);
  border-radius: 20px;
  }

`;

export const Form = styled.form`

  padding: 40px 0;

  input[type="text"] {
    background: var(--white);
    border: 1px solid #00000033;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 100%;
    padding: 15px;
    font-size: 1em;
  }

  input[type="number"] {
    background: var(--white);
    border: 1px solid #00000033;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 15px;
    font-size: 1em;
    width: 20%;
    color: var(--green_dark);
    
  }

  input[type="date"] {
    width: 100%;
    background: var(--white);
    border: 1px solid #00000033;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 15px;
    font-size: 1.2em;
    color: var(--green_dark);
    margin-bottom: 30px;
  }

  input[type="radio"] {
    transform: scale(1.5);
    margin-left: 5px;
  }

  p {
    font-size: 1em;
    margin-bottom: 2px;
  }

  button {
    width: 100%;
    padding: 15px;
    background: #395b64;
    color: #ffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid #00000033;
    border-radius: 40px;
    font-size: 1.3em;
    margin-top: 10px;
    cursor: pointer;
    transition: 200ms;
  }

  button:hover {
    background-color: #295b64;
  }

  label {
    font-size: 1.3em;
    margin-left: 5px;
  }

  span {
    font-size: 1.3em;
    margin-left: 5px;
  }

  select {
    background: var(--white);
    border: 1px solid #00000033;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 100%;
    padding: 15px;
    font-size: 15px;
    color: var(--green_dark);
`;

export const Div = styled.div`
  padding: 10px 0px;
`;

export const FlexColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
`;

export const Label = styled.label`
  font-size: 1.3em;
  margin-left: 5px;
`;

export const RadioGroup = styled.div`
  padding-top: 20px;

  input {
    margin-top: 20px;
  }

  input[type="date"]:disabled {
    background-color: var(--shape);
  }
`;
