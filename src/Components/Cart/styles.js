import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #e4e7e9;
`
export const Table = styled.table`
    border-collapse: separate;
    background: #fff;
    border-radius: 5px;
    margin: 50px auto;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    text-align: center;
    & thead {
        border-radius: 5px;
        & th {
            font-family: 'Patua One', cursive;
            font-size: 16px;
            font-weight: 400;
            color: #fff;
            text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
            text-align: left;
            padding: 20px;
            background-image: linear-gradient(#5a859c, #08364e);
            border-top: 1px solid #858d99;
        }
    }
    & tbody {
        &:hover>tr td {
            opacity: 0.5;
            color: transparent;
            text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.8);
        }
        &:hover>tr:hover td {
            text-shadow: none;
            color: #2d2d2d;
            opacity: 1.0;
        }
    }
    & tfoot {
        text-align: center;
        font-size: 25px;
        color: black;
        & td:last-child{
            border-top: 1px solid black;
        }
    }
`
export const Button = styled.button`
    align-items: center;
    appearance: none;
    background-image: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);
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
    &:focus {
        box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
    }
    &:hover {
        box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
        transform: translateY(-2px);
    }
    &:active {
        box-shadow: #3c4fe0 0 3px 7px inset;
        transform: translateY(2px);
    }
`