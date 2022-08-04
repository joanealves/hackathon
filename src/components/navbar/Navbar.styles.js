import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HEADER = styled.header`
    padding: 16px;
    height: 80px;
    background-color: var(--green_dark);
    display: flex;
    align-items: center;
    align-content: center;
    flex-direction: row;
    justify-content: space-between;
`
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
    padding: 16px;
    display: flex;
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
