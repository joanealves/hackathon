import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LogoContainer = styled.div`
    display: flex;
`
export const MarketLogo = styled.img`
    height: 90px;
`
export const LogoCar = styled.img`
    height: 30px;
`

export const NavContainer = styled.nav`
    background-color: var(--green_dark);
    height: 80px;
    padding: 16px;
    margin-top: -91px;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`

export const NavLink = styled(Link)`
    text-decoration: none;
    color: var(--green_ligth);
    cursor: pointer;

    &:hover {
            color: var(--gray);
            filter: brightness(0.8);
            /* text-decoration: none; */
        }
`
