import { useState } from "react";
import { CartRow } from "../CartRow";
import './style.css'

export const CartBody = ({navigate, cart, setCart}) => {
    const [totalCart, setTotalCart] = useState(0)
    
    return (
        <>
            <div className="div-cart">
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
                        {cart.map((product) => {
                            return (<CartRow key={product.id} product={product} cart={cart} setCart={setCart} setTotalCart={setTotalCart} />)
                        })
                        }
                    </tbody>
                    <tfoot>
                        <tr><td colSpan={10}>Total do Carrinho: {totalCart.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td></tr>
                    </tfoot>
                </table>

                <button className="button" onClick={() => {
                    navigate('/address')
                }}>Finalizar Compra</button>
            </div>
        </>
    )
}
