import React from "react";
import Logo from './imgs/logo.jpg'
import Carrinho from './imgs/carrinho.jpeg'

export default function Header(props){
    return (
        <div className="Div-Header">
            <img src={Logo} alt="logo"/>
            <img src={Carrinho} alt='Carrinho'/>
        </div>
    )
}