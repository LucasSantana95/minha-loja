import React from "react";

export default function Cart(props) {
    
    return (
        <div className="Div-Cart">
            <button onClick={()=>{props.handlePage('main');}}>{'<'}</button>
            <h1>Carrinho de Compras</h1>
            <table>
                <thead>
                    <tr>
                        <th>Thumb</th>
                        <th>Nome</th>
                        <th>Código</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Botão</th>
                    </tr>
                </thead>
                <tbody>
                    {props.cart}
                </tbody>
            </table>
            <p>Valor Total do Carrinho: R$ {props.cartValue}</p>
            <button onClick={() => {
                if(window.confirm('Deseja Finalizar sua Compra?')){
                    console.log('compra concluida.')
                }
                props.handlePurchasedProducts(props.cartProducts)
                props.handlePage('address');
            }}>Finalizar Compra</button>
        </div>
    )
}