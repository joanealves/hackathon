/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import Listagem from './pages/listagem/Listagem';
import ListaCompleta from './pages/lista-completa/Lista-completa';
import Navbar from './components/navbar/Navbar'
import { GlobalStyle } from './styles/global';
import * as S from './App.styles'
import ListasCompras from './pages/listas-compras/ListasCompras';


function App() {
  return (
    <BrowserRouter>
      <S.Container></S.Container>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/listagem" element={<Listagem />} />
        <Route path="/listas-compras" element={<ListasCompras />} />
        <Route path="/lista-completa" element={<ListaCompleta />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>

  );
}

export default App;
