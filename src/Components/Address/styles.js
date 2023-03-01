import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #e4e7e9;
    height: 100vw;
    width: 100vw;
`
export const Container = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 50%;
    border: 1px solid black;
    box-shadow: 0px 0px 10px 5px #08364e;
    & input,span{
        font-family: 'Ubuntu', sans-serif;
        display: block;
        margin: 10px;
        padding: 5px;
        border: none;
        font-size: 22px;
    }
`
export const Button = styled.button`
    align-items: center;
    appearance: none;
    background-image: radial-gradient(100% 100% at 100% 0, #42caf0 0, #08364e 100%);
    border: 0;
    border-radius: 6px;
    box-shadow: rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, rgba(58, 65, 111, .5) 0 -3px 0 inset;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    font-family: "JetBrains Mono", monospace;
    height: 48px;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: box-shadow .15s, transform .15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow, transform;
    font-size: 18px;
    &focus {
        box-shadow: #08364e 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
    }
    &:hover {
        box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #08364e 0 -3px 0 inset;
        transform: translateY(-2px);
    }
    &:active {
        box-shadow: #08364e 0 3px 7px inset;
        transform: translateY(2px);
    }
`
export const Row = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    width: 40%;
    justify-content: center;
    align-items: center;
`
export const Input = styled.input`
    font-size: 20px;
    font-weight: 300;
    border-radius: 2px;
    margin: 0;
    border: none;
    width: 60%;
    background: rgba(0, 0, 0, 0);
    transition: padding-top 0.2s ease, margin-top 0.2s ease;
    overflow-x: hidden; 
    text-align: center;
    &:focus {
        &:focus + label{
            & > span{
                top: -70px;
                font-size: 18px;
                color: #333;
            }
            width: 50%;
        }
        & + label > span,
        &:valid + label > span {
            top: -70px;
            font-size: 18px;
            color: #333;
        }
        outline: 0;
        padding-top: 35px;
    }
    & + label{
        display: block;
        position: relative;
        white-space: nowrap;
        padding: 0;
        margin: 0;
        width: 60%;
        border-top: 1px solid rgb(3, 1, 1);
        -webkit-transition: width 0.4s ease;
        transition: width 0.4s ease;
        height: 0px;
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button{
        -webkit-appearance: none;
        margin: 0;
    }
`
export const Span = styled.label`
    & span {
        color: black;
        font-weight: 300;
        margin: 0;
        position: absolute;
        font-size: 18px;
        top: -55px;
        left: 0px;
        -webkit-transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
        transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
    }
`
export const CepLabel = styled.label`
    color: rgb(133, 130, 130);
    font-size: 15px;
    position: relative;
    left: 140px;
    top: -40px;
`
/*
.cep-label{
  color: rgb(133, 130, 130);
  font-size: 13px;
  position: relative;
  left: 140px;
  top: -40px;
}
 */