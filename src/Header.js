import React from "react";
import Logo from './imgs/logo.jpg'
import Carrinho from './imgs/carrinho.jpeg'

export default function Header(props) {
    return (
        <div className="Div-Header">
            <button onClick={()=>{props.handlePage('main'); props.apiCall()}}>
                <img src={Logo} alt="logo" />
            </button>
            <h1>Império Solar</h1>
            <button onClick={()=>{props.handlePage('cart')}}>
                <img src={Carrinho} alt='Carrinho' />
            </button>
        </div>
    )
}