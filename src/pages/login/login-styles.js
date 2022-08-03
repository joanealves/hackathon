import styled from "styled-components";

export const Image = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  font-size: 35px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 105px;
    height: 1px;
    background-color: black;
    margin: 10px;
    background-color: #00000033;
  }
  p {
    color: #00000080;
    font-weight: 600;
  }
`;

export const Login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 15px;
  height: 250px;
  width: 95%;
`;

export const LoginForm = styled.div`
  display: flex;
  justify-content: center;
  width: 95%;

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

  span {
    color: red;
    display: flex;
    justify-content: center;
    margin-top: 2px;
    font-size: 14px;
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
`;
export const Email = styled.div`
  height: 95px;
`;
export const Cpf = styled.div`
  height: 95px;
`;
