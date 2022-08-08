import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./Navbar.css";
import * as S from "./Navbar.styles";

// import Logo from "../../assets/marketit.png"
import LogoCar from "../../assets/Logo sem fundo.png";
import { Link } from "react-router-dom";
import { NavbarData } from "./NavbarData";

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const [isDesktop, setDesktop] = useState(window.innerWidth > 1024);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 1024);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <>
            {isDesktop ? (
                <>
                    <S.HEADER>
                        <S.LogoContainer>
                            <S.LogoCar src={LogoCar} alt="Logo escrita Market.It"></S.LogoCar>
                            {/* <S.MarketLogo src={Logo} alt="Logo escrita Market.It">
                </S.MarketLogo> */}
                        </S.LogoContainer>
                        <S.NavContainer>
                            <S.NavLink exact to="/">
                                Login |
                            </S.NavLink>
                            <S.NavLink to="/cadastro">Cadastro de Produtos | </S.NavLink>
                            <S.NavLink to="/listagem">Listagem de Produtos | </S.NavLink>
                            <S.NavLink to="/listas-compras">Listas de Compra | </S.NavLink>
                            <S.NavLink to="/lista-completa">Lista Diária </S.NavLink>
                        </S.NavContainer>
                    </S.HEADER>
                </>
            ) : (
                <>
                    <div className="navbarContainer">
                        <div className="navbar">
                            <S.LogoCar src={LogoCar} alt="Logo escrita Mark.It"></S.LogoCar>
                            <Link to="#" className="menu-bars">
                                <FaIcons.FaBars onClick={showSidebar} />
                            </Link>
                        </div>
                        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                            <ul className="nav-menu-items" onClick={showSidebar}>
                                <li className="navbar-toggle">
                                    <Link to="#" className="menu-bars">
                                        <AiIcons.AiOutlineClose />
                                    </Link>
                                </li>
                                {NavbarData.map((item, index) => {
                                    return (
                                        <li key={index} className={item.cName}>
                                            <Link to={item.path}>
                                                <span className="span">{item.title}</span>
                                                {item.icon}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </div>
                </>
            )}
        </>
    );
}
export default Navbar;