import styled from "styled-components"

export const Container = styled.div`
    width: 400px;
    height: 570px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    margin: 10px;
    border-radius: 15px;
`
export const Figure = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 350px;

    & img {
        width: 200px;
        height: 300px;
    }
`
export const Input = styled.input`
    width: 40px;
    text-align: center;
    margin-left: 5px;
    font-size: inherit;
`
export const Button = styled.button`
    padding: 10px;
    border-radius: 20px;
    background-color: #ffff03;
    border: none;
    font-weight: bold;
    margin-left: 10px;
`
export const ID = styled.div`
    color: rgb(131, 130, 130);
    height: 25px;   
`
export const Name = styled.div`
    width: 270px;
    text-align: center;
    height: 60px;
    font-weight: bold;   
`
export const Category = styled.div`
    height: 25px;   
`
export const Value = styled.div`
    border-bottom: 1px solid #ccc;
    width: 90%;
    text-align: center;
    height: 35px;
`
export const Cart = styled.div`
    display: flex;
    height: 60px;
    justify-content: center;
    align-items: center;
`