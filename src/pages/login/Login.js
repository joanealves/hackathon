import * as S from "./login-styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import LogoCar from "../../assets/Logo sem fundo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const log = () => {
    navigate("/cadastro");
  };

  const handleClickLogin = (values) => {
    const dados = values.email + "-" + values.cpf;
    var CryptoJS = require("crypto-js");
    const hash = CryptoJS.MD5(dados).toString();
    console.log(hash);

    var user = [];
    const addUser = () => {
      if (localStorage.users) {
        user = JSON.parse(localStorage.getItem("users"));
      }
      user.push(hash);
      localStorage.users = JSON.stringify(user);

      var Airtable = require("airtable");
      var base = new Airtable({ apiKey: "keyIQRTXBdJyaVJaz" }).base(
        "app4vUGC2nxXBaIY7"
      );

      // Creating a new record and posting on Airtable
      base("Produtos").create(
        {
          id_usuario: hash,
        },
        function (err, record) {
          if (err) {
            console.error(err);
            return;
          }
          console.log("HASH", record.fields);
        }
      );
    };
    addUser();
    log();
  };

  const validationLogin = yup.object().shape({
    email: yup.string().email("Email inválido!").required("Campo obrigatório!"),
    cpf: yup
      .string()
      .min(11, "CPF inválido!")
      .max(11, "CPF inválido!")
      .required("Campo obrigatório!"),
  });

  return (
    <div>
      <S.Image>
        <img src={LogoCar}></img>
      </S.Image>

      <S.Title>
        <div></div>
        <p>LOGIN/ SING UP</p>
        <div></div>
      </S.Title>

      <S.Login>
        <Formik
          initialValues={{}}
          onSubmit={handleClickLogin}
          validationSchema={validationLogin}
        >
          <S.LoginForm>
            <Form>
              <S.Email>
                <p>Email</p>
                <Field component="input" name="email"></Field>
                <ErrorMessage component="span" name="email"></ErrorMessage>
              </S.Email>
              <S.Cpf>
                <p>CPF</p>
                <Field name="cpf"></Field>
                <ErrorMessage component="span" name="cpf"></ErrorMessage>
              </S.Cpf>

              <button type="submit">LOGIN</button>
            </Form>
          </S.LoginForm>
        </Formik>
      </S.Login>
    </div>
  );
}

export default Login;
