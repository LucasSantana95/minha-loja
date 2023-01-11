import React from "react";
import Logo from './imgs/logo.jpg'
import Carrinho from './imgs/carrinho.jpeg'

export default function Header(props) {
    return (
        <div className="Div-Header">
            <button onClick={()=>{props.handlePage('main'); props.api()}}>
                <img src={Logo} alt="logo" />
            </button>
            <button onClick={()=>{props.handlePage('cart')}}>
                <img src={Carrinho} alt='Carrinho' />
            </button>
        </div>
    )
}