import * as S from "./login-styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

function Login() {
  const handleClickLogin = (values) => {
    console.log(values);
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
        <h1>!!!!</h1>
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
