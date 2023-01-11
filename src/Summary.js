import React from "react";

export default function Summary(props) {

    return (
        <>
        <h1>Resumo da Compra</h1>
            <div className="Div-Products-Summary">
                <h2>Produtos Comprados</h2>
                {props.purchasedProducts}
            </div>
            <div className="Div-Address-Summary">
                <h3>Endereço de Entrega do Produto</h3>
                <p>Cep:{props.AddressInfo.cep} </p>
                <p>Rua: {props.AddressInfo.street} </p>
                <p>Numero: {props.AddressInfo.num}</p>
                <p>Complemento: {props.AddressInfo.complement} </p>
                <p>Cidade: {props.AddressInfo.city}</p>
                <p>UF: {props.AddressInfo.uf}</p>
            </div>
        </>
    )
}