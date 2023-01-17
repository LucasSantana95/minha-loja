import { useState, useEffect } from "react";

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
    useEffect(() => {
        const duplicateData = cart.find(e => e.id === product.id)
        const index = cart.indexOf(duplicateData)
        cartClone[index] = { ...duplicateData, quantity: Number(quantity), total: duplicateData.value * Number(quantity) }
        setCartRow(cartClone[index])
        setCart(cartClone)
    }, [quantity])
    useEffect(() => {
        setTotalCart(prev => prev + cartRow.total)
    }, [cart])

    return (
        <>
            <tr>
                <td><img src={cartRow.thumb}></img></td>
                <td>{cartRow.name}</td>
                <td>{cartRow.id}</td>
                <td><input id={cartRow.id} type={'number'} value={quantity} min={1} onChange={(e) => handleQuantity(e)} className='input-quantity'></input></td>
                <td>{cartRow.total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
                <td><button onClick={() => {
                    const newArr = cart.filter((e) => e.id !== cartRow.id)
                    console.log(newArr);
                    setCart(newArr);
                }
                }> Remover </button></td>
            </tr>
        </>
    )
}