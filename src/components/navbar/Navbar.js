// import { Link } from 'react-router-dom'
import * as S from "./Navbar.styles"
// import Logo from "../../assets/marketit.png"
import LogoCar from "../../assets/Logo sem fundo.png"

function Navbar() {
    return (
        <S.HEADER>
            <S.LogoContainer>
                <S.LogoCar src={LogoCar} alt="Logo escrita Market.It">
                </S.LogoCar>
                {/* <S.MarketLogo src={Logo} alt="Logo escrita Market.It">
                </S.MarketLogo> */}
            </S.LogoContainer>
            <S.NavContainer>
                <S.NavLink exact to="/">Login</S.NavLink>
                <S.NavLink to="/cadastro">Cadastro de Produtos</S.NavLink>
                <S.NavLink to="/listagem">Listagem de Produtos</S.NavLink>
                <S.NavLink to="/listas-compras">Listas de Compra</S.NavLink>
                <S.NavLink to="/lista-completa">Lista Diária</S.NavLink>
            </S.NavContainer>

        </S.HEADER>

    )
}
export default Navbar