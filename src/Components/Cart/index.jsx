import { useState } from "react";
import { CartRow } from "../CartRow";
import * as S from './styles'

export const Cart = ({ navigate, cart, setCart }) => {
    const [totalCart, setTotalCart] = useState(0)

    const handleOnClick = () => {
        if (cart.length > 0) {
            navigate('/address')
            localStorage.setItem('Products', JSON.stringify(cart))
            localStorage.setItem('Total', totalCart)
        } else {
            alert('Carrinho esta vazio')
        }
    }

    return (
        <S.Container>
            <h1>Carrinho de Compras</h1>
            <S.Table>
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
                    <tr><td colSpan={10}>Total do Carrinho: {totalCart.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td></tr>
                </tfoot>
            </S.Table>
            <S.Button className="button" onClick={() => { handleOnClick() }}>Finalizar Compra</S.Button>
        </S.Container>
    )
}
