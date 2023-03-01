import ReactModal from "react-modal"
import * as S from './styles'

ReactModal.setAppElement('body')

export const CardProducts = ({ setIsHidden, cart, product, setCart }) => {

    const handleOpenModal = () => {
        setIsHidden('')
        setTimeout(() => {
            setIsHidden('hidden')
        }, 3000)
    }

    const onClickButton = (product) => {


        const data = {
            ...product,
            value: Number(product.value),
            quantity: Number(document.getElementById(product.id).value),
            total: Number(product.value) * Number(document.getElementById(product.id).value)
        }
        if (!cart.find(e => e.id === data.id)) {
            handleOpenModal();
            setCart([...cart, data])
        }
        else {
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
        <S.Container>
            <S.Figure>
                <img src={product.thumb} alt={product.id} className='card-image'></img>
            </S.Figure>
            <S.ID>
                Código: {product.id}
            </S.ID>
            <S.Name>
                {product.name}
            </S.Name>
            <S.Category>
                Categoria: {product.category}
            </S.Category>
            <S.Value>
                Valor Unitário: {Number(product.value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            </S.Value>
            <S.Cart>
                Quantidade: <S.Input id={product.id} type={'number'} defaultValue={1} min={1} className='input-quantity'></S.Input>
                <S.Button className='card-button' onClick={() => { onClickButton(product) }}>Adicionar ao Carrinho</S.Button>
            </S.Cart>
        </S.Container>
    )
}

