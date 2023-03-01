import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 800px;
    height: 300px;  
    margin: 5px;
    align-items: center;
`
export const Figure = styled.figure`
    display: flex;
    flex-direction: column;
    height: 70%;
    width: 25%;
    align-items: center;
    justify-content: center;
    color: rgb(131, 130, 130);
    & img {
        height: 100%;
        width: 100%;
    }
`
export const Infos = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    height: 100%;
    & p {
        margin: 5px;
        &:first-child{
            font-weight: bold;
        }
    }
`