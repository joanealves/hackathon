import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Cadastro from "../pages/cadastro/Cadastro";
import Listagem from "../pages/listagem/Listagem";
import ListaCompleta from "../pages/lista-completa/Lista-completa";
import { GlobalStyle } from "../styles/global";
import * as S from "../App.styles";
import ListasCompras from "../pages/listas-compras/ListasCompras";
import { PrivateRoute } from "./privateRoute";

const Rotas = () => {
  return (
    <BrowserRouter>
      <S.Container></S.Container>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route
          path="/cadastro"
          element={
            <PrivateRoute>
              <Cadastro />
            </PrivateRoute>
          }
        />
        <Route
          path="/listagem"
          element={
            <PrivateRoute>
              <Listagem />
            </PrivateRoute>
          }
        />
        <Route
          path="/listas-compras"
          element={
            <PrivateRoute>
              <ListasCompras />
            </PrivateRoute>
          }
        />
        <Route
          path="/lista-completa"
          element={
            <PrivateRoute>
              <ListaCompleta />
            </PrivateRoute>
          }
        />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default Rotas;
