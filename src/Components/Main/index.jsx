import banner from '../../imgs/banner.png';
import { CardProducts } from '../CardProducts';
import { useState } from 'react';
import * as S from './styles'

export const Main = ({cart, setCart, products }) => {
    const [isHidden, setIsHidden] = useState('hidden');
    
    return (
        <>
            <S.Container>
                <S.Banner src={banner}/>
                {
                    products.map((product) => (<CardProducts cart={cart} setIsHidden={setIsHidden} key={product.id} product={product} setCart={setCart}/>))
                }
                <S.Modal hidden={isHidden}>
                    <p>Produto foi adicionado ao carrinho! </p>
                </S.Modal>
            </S.Container>
        </>
    )
}