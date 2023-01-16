import './style.css'
import banner from '../../imgs/banner.png';
import {CardProducts} from '../CardProducts';

export const MainProduct = ({cart, setCart, products }) => {
    return (
        <>
            <main className="main-product">
                <img src={banner} className='banner-img'></img>
                {
                    products.map((product) => (<CardProducts cart={cart} key={product.id} product={product} setCart={setCart}/>))
                }
            </main>
        </>
    )
}