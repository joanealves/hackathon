import React from "react";
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io5";

export const NavbarData = [
  {
    title: "Login",
    path: "/",
    icon: <IoIcons.IoLogInOutline />,
    cName: "nav-text",
  },
  {
    title: "Cadastro de produtos",
    path: "/cadastro",
    icon: <AiIcons.AiOutlinePlusCircle />,
    cName: "nav-text",
  },
  {
    title: "Lista de produtos",
    path: "/listagem",
    icon: <AiIcons.AiOutlineUnorderedList />,
    cName: "nav-text",
  },
  {
    title: "Listas de compras",
    path: "/listas-compras",
    icon: <AiIcons.AiOutlineCalendar />,
    cName: "nav-text",
  },
  {
    title: "Lista diária",
    path: "/lista-completa",
    icon: <IoIcons.IoTodayOutline />,
    cName: "nav-text",
  },
];
