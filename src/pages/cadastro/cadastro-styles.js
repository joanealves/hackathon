import styled from "styled-components";

export const Container = styled.div`
  width: 375px;
  margin: 30px auto;
  color: var(--green_dark);
`;

export const Form = styled.form`
  padding: 40px 0;

  input {
    background: #ffff;
    border: 1px solid #00000033;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 320px;
    padding: 15px;
    font-size: 15px;
  }

  p {
    font-size: 14px;
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
    font-size: 20px;
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
`;

export const Div = styled.div`
  padding: 20px 0px;
`;

export const FlexColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
`;

export const InputTextDiv = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
`;

export const InputDate = styled.input`
  width: 82%;
  background: var(--shape);
  color: var(--green_dark);
  font-size: 1.3rem;
  padding: 10px 15px;
  outline: 0;
  border-radius: 13px;
  border: 2px solid var(--green_dark);
  &:hover {
    color: var(--green_dark);
    background: var(--green_light);
  }
`;

export const Select = styled.select`
  display: inline-block;
  margin-bottom: 15px;
  width: 100%;
  font-size: 1.3rem;
  display: inline-block;
  width: 100%;
  cursor: pointer;
  padding: 10px 15px;
  outline: 0;
  border: 2px solid var(--green_dark);
  border-radius: 13px;
  background: var(--shape);
  color: var(--green_dark);
  &:hover {
    color: var(--green_dark);
    background: var(--green_light);
  }
  &:disabled {
    opacity: 0;
    pointer-events: none;
  }
`;

export const Label = styled.label`
  font-size: 1.3em;
  margin-left: 5px;
`;

// export const Button = styled.button`
//   width: 100%;
//   float: right;
//   background: var(--green_dark);
//   color: var(--white);
//   border: 2px solid var(--green_dark);
//   box-shadow: #000 0 5px 5px -5px;
//   font-size: 1.5em;
//   padding: 0.25em 1em;
//   border-radius: 10px;
//   margin-top: 20px;
//   &:hover {
//     background: var(--green_light);
//     color: var(--green_dark);
//   }
// `;
