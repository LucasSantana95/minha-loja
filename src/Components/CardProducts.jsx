export const CardProducts = ({ cart, product, setCart }) => {
    const onClickButton = (product) => {
        const data = {
            ...product,
            value: Number(product.value),
            quantity: Number(document.getElementById(product.id).value),
            total: Number(product.value) * Number(document.getElementById(product.id).value)
        }
        if (!cart.find(e => e.id === data.id)) {
            alert(`Produto ${data.name} foi adicionado ao carrinho!`)
            setCart([...cart, data])
        } else {
            if (window.confirm('Este produto ja foi adicionado ao carrinho, deseja adicionar a quantidade?')) {
                const duplicateItem = cart.filter((e) => e.id === data.id)
                const newArr = cart.filter((e) => e.id !== data.id)
                duplicateItem[0].quantity = Number(duplicateItem[0].quantity) + Number(data.quantity)
                duplicateItem[0].total = Number(data.value) * Number(duplicateItem[0].quantity)
                setCart([...newArr, ...duplicateItem])
            }
        }
    }
    return (
        <>
            <div className='card-product'>
                <figure className='card-figure'>
                    <img src={product.thumb} alt={product.id} className='card-image'></img>
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

