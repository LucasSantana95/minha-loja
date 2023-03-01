import { Header } from "../Components/Header"
import { Main } from "../Components/Main"
import { NavBar } from "../Components/NavBar"

export const MainPage = ({cart, navigate,setCart, products, getProductsByCategory}) => {
    return (
        <>
            <Header navigate={navigate} getProductsByCategory={getProductsByCategory}/>
            <NavBar getProductsByCategory={getProductsByCategory}/>
            <Main cart={cart} products={products} setCart={setCart} />
        </>
    )
}