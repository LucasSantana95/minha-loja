export const CardProducts = ({ cart, product, setCart }) => {
    const onClickButton = (product) => {
        const data = {
            ...product,
            value : Number(product.value),
            quantity: Number(document.getElementById(product.id).value),
            total : Number(product.value)*Number(document.getElementById(product.id).value)
        }
        const duplicateData = cart.find(e => e.id === data.id)
        if (duplicateData) {
            const indice = cart.indexOf(duplicateData)
            const cartClone = cart;
            cartClone[indice] = {...duplicateData, quantity : duplicateData.quantity+ data.quantity }
            setCart(cartClone)
            localStorage.setItem('cartProducts',JSON.stringify({cart}))
        } else {
            setCart([...cart, data])
            localStorage.setItem('cartProducts',JSON.stringify({cart}))
        }
        
    }
    return (
        <>
            <div className='card-product'>
                <figure className='card-figure'>
                    <img src={product.thumb} className='card-image'></img>
                </figure>
                <div className='card-id'>
                    Código: {product.id}
                </div>
                <div className='card-name'>
                    {product.name}
                </div>
                <div className='card-category'>
                    Categoria: {product.category}
                </div>
                <div className='card-value'>
                    Valor Unitário: {Number(product.value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                </div>
                <div className='card-cart'>
                    Quantidade: <input id={product.id} type={'number'} defaultValue={1} min={1} className='input-quantity'></input>
                    <button className='card-button' onClick={() => { onClickButton(product) }}>Adicionar ao Carrinho</button>
                </div>
            </div>
        </>
    )
}

