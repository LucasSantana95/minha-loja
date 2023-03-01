import { useState, useEffect } from "react";
import * as S from './styles'

export const CartRow = ({ setTotalCart, product, cart, setCart }) => {
    const [quantity, setQuantity] = useState(product.quantity)
    const [cartRow, setCartRow] = useState(product)

    const cartClone = cart;
    const handleQuantity = (e) => {
        if (e.target.value < quantity) {
            setTotalCart(prev => prev - cartRow.value)
        } else if (e.target.value > quantity) {
            setTotalCart(prev => prev + cartRow.value)
        }
        setQuantity(Number(e.target.value))
    }
    const handleOnClick = () => {
        const newArr = cart.filter((e) => e.id !== cartRow.id)
        setCart(newArr);
        setTotalCart(prev => prev - cartRow.total)
    }
    useEffect(() => {
        const duplicateData = cart.find(e => e.id === product.id)
        const index = cart.indexOf(duplicateData)
        cartClone[index] = { ...duplicateData, quantity: Number(quantity), total: duplicateData.value * Number(quantity) }
        setCartRow(cartClone[index])
        setCart(cartClone)
    }, [quantity])
    useEffect(() => {
        setTotalCart(prev => prev + cartRow.total)
    }, [])

    return (
        <S.Container>
            <td><S.Image src={cartRow.thumb}></S.Image></td>
            <td>{cartRow.name}</td>
            <td>{cartRow.id}</td>
            <td><S.Input id={cartRow.id} type={'number'} value={quantity} min={1} onChange={(e) => handleQuantity(e)} className='input-quantity'></S.Input></td>
            <td>{cartRow.total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
            <td><S.Button onClick={() => {handleOnClick()}
            }> Remover </S.Button></td>
        </S.Container>

    )
}