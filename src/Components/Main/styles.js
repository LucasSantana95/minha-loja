import styled  from 'styled-components'

export const Container = styled.main`
    width: 100vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

export const Modal = styled.div`
    display: flex;
    width: 28vw;
    height: 3vw;
    background-color: rgba(79, 211, 74, 0.801);
    text-align: center; 
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    right: 0;
    display: ${props => props.hidden === '' ? '' : 'none'};
`

export const Banner = styled.img`
    width: 100vw;
    height: 400px;
`