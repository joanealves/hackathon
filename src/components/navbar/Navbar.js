import { Link } from 'react-router-dom'
import { Fragment } from 'react'
function Navbar() {
    return (
        <Fragment>
            <Link exact to="/">Login</Link>
            <Link to="/cadastro">Cadastro de Produtos</Link>
            <Link to="/listagem">Listagem de Produtos</Link>
            <Link to="/listas-compras">Listas de Compra</Link>
            <Link to="/lista-completa">Lista Diária</Link>
        </Fragment>

    )
}
export default Navbar