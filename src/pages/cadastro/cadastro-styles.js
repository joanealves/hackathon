import styled from "styled-components";

export const Container = styled.div`
  width: 375px;
  padding: 20px;
  color: var(--green_dark);

  .hideTitle {
    display: none;
  }

  // Tablet View
  @media (min-width: 720px) {
    margin: 15px auto;

    .hideTitle {
      display: none;
    }
  }

  // Desktop View
  @media screen and (min-width: 1024px) {
    margin: auto;
    margin-top: 50px;
    padding: 0 50px 50px 50px;
    width: 900px;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    // background-color: var(--white);
    border-radius: 20px;

    .headerCadastro {
      transform: scale(1.3);
    }

    .hideTitle {
      display: inline-block;
    }
  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 120px;
  }
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const ImageCadastro = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 120px;
  }
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const TitleCadastro = styled.div`
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

export const Form = styled.form`
  padding-top: 20px;

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
    background: var(--green_dark);
    color: #ffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid #00000033;
    border-radius: 40px;
    font-size: 1.3em;
    margin-top: 10px;
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
  }

  // Tablet View
  @media (min-width: 720px) {
    margin: 30px auto;
  }

  // Desktop View
  @media screen and (min-width: 1080px) {
    width: 70%;
    transform: scale(1);
  }
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
