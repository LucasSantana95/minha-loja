import React from "react";

export default function CartRow(props) {

    return (
        <tr>
            <td><img src={props.product.thumb} alt='thumb do produto'></img></td>
            <td>{props.product.name}</td>
            <td>{props.product.id}</td>
            <td>{props.product.quantity}</td>
            <td>R${props.product.value * props.product.quantity}</td>
            <td><button onClick={() => {props.handleRemoveProductCart(props.product)}}>Remover</button></td>
        </tr>
    )
}
