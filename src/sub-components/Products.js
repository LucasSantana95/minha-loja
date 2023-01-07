import React from "react";

export default function Products(props){
    return (
        <div>
            <img src="" alt="thumb do produto"></img>
            <p>Nome do Produto</p>
            <p>Categoria do Produto</p>
            <p>Codigo do Produto</p>
            <input type={'number'} min='1'/>
            <p>Valor do Produto</p>
        </div>
    )
}