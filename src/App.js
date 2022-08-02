/* eslint-disable no-unused-vars */
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import Listagem from './pages/listagem/Listagem';
import ListasCompra from './pages/listas-compras/Listas-compras';
import ListaCompleta from './pages/lista-completa/Lista-completa';
import Navbar from './components/navbar/Navbar'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/listagem" element={<Listagem />} />
        <Route path="/listas-compra" element={<ListasCompra />} />
        <Route path="/lista-completa" element={<ListaCompleta />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
