import { Cart } from '../Components/Cart'
import { Header } from "../Components/Header"

export const CartPage = ({navigate, cart, setcart, getProductsByCategory }) => {

    return (
        <>
            <Header navigate={navigate} getProductsByCategory={getProductsByCategory} />
            <Cart navigate={navigate} cart={cart} setCart={setcart}/>
        </>
    )
}