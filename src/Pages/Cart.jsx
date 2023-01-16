import { CartBody } from '../Components/Cart/CartBody'
import { Header } from "../Components/Header/Header"

export const Cart = ({navigate, cart, setcart, getProductsByCategory }) => {

    return (
        <>
            <Header navigate={navigate} getProductsByCategory={getProductsByCategory} />
            <CartBody navigate={navigate} cart={cart} setCart={setcart}/>
        </>
    )
}