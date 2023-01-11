import React from "react";

export default function PurchasedProduct(props) {
    return (
        <div className="Purchased-Product-Card">
                <img src={props.product.thumb} alt="thumb do produto"></img>
                <p>Descrição: {props.product.name}</p>
                <p>Código do Produto: {props.product.id}</p>
                <p>Quantidade Comprada: {props.product.quantity}</p>
                <p>Valor: R${props.product.value*props.product.quantity}</p>
        </div>
    )
}
