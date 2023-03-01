import styled from 'styled-components'

export const Menu = styled.nav`
    width: 100vw;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #d4aa00;
`
export const Button = styled.button`
    width: 180px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #d4aa00;
    font-size: 15px;
    font-weight: bold;
    &:hover {
        background-color: white;
    }
`