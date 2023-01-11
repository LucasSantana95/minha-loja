import React from "react";

export default function CartRow(props) {

    return (
        <tr>
            <td><img src={props.product.thumb}></img></td>
            <td>{props.product.name}</td>
            <td>{props.product.id}</td>
            <td>{props.product.quantity}</td>
            <td>R${props.product.value * props.product.quantity}</td>
            <td>
                <button onClick={() => {
                    if (window.confirm('Deseja Remover esse Produto do Carrinho?')) {
                        props.handleRemoveProductCart(props.product)
                    }
                }}>Remover
                </button>
            </td>
        </tr>
    )
}
