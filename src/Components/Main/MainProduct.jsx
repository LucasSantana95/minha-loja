import './style.css'
import banner from '../../imgs/banner.png';
import {CardProducts} from '../CardProducts';
import { useState } from 'react';

export const MainProduct = ({cart, setCart, products }) => {
    const [isHidden, setIsHidden] = useState('hidden');
    
    return (
        <>
            <main className="main-product">
                <img src={banner} className='banner-img'></img>
                {
                    products.map((product) => (<CardProducts cart={cart} setIsHidden={setIsHidden} key={product.id} product={product} setCart={setCart}/>))
                }
                <div className={`product-modal ${isHidden}`}>
                    <p>Produto foi adicionado ao carrinho! </p>
                </div>
            </main>
        </>
    )
}