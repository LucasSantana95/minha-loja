import { useState, useEffect } from "react";

export const CartRow = ({ product, cart, setCart }) => {
    const [quantity, setQuantity] = useState(product.quantity)
    const [rowProduct, setRowProduct] = useState(product)
    const cartClone = cart;
    const cartIndex = cart.indexOf(product)
    const handleQuantity = (e) => {
        setQuantity(e.target.value)
        const duplicateData = cart.find(e => e.id === product.id)
        const index = cart.indexOf(duplicateData)
        cartClone[index] = { ...duplicateData, quantity: Number(quantity), total: duplicateData.value * Number(quantity) }
        setCart(cartClone)
        setRowProduct(cartClone[index])
    }
    useEffect(()=>{
        setRowProduct(cartClone[cartIndex])
    }, [cart])
    return (
        <>
            <tr>
                <td><img src={rowProduct.thumb}></img></td>
                <td>{rowProduct.name}</td>
                <td>{rowProduct.id}</td>
                <td><input id={rowProduct.id} type={'number'} value={quantity} min={1} onChange={(e) => handleQuantity(e)} className='input-quantity'></input></td>
                <td>{rowProduct.total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
                <td><button onClick={() => {
                    const newArr = cart.filter((e) => e.id !== rowProduct.id)
                    console.log(newArr);
                    setCart(newArr);
                }
                }> Remover </button></td>
            </tr>
        </>
    )
}