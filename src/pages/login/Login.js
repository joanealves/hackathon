import * as S from "./login-styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import LogoCar from "../../assets/Logo sem fundo.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const log = () => {
    navigate("/cadastro");
  };

  const handleClickLogin = (values) => {
    //encrypting user data
    const dados = values.email + "-" + values.cpf;
    var CryptoJS = require("crypto-js");
    const hash = CryptoJS.MD5(dados).toString();
    console.log(hash);

    //saving LocalStorage hash
    var user = [];
    const addUser = () => {
      if (localStorage.users) {
        user = JSON.parse(localStorage.getItem("users"));
      }
      user.push(hash);
      localStorage.users = JSON.stringify(user);
      console.log(localStorage.users);
    };
    addUser();
    log();
  };

  //input validation
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
        <img src={LogoCar} alt="LogoCar"></img>
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
