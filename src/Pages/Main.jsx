import { Header } from "../Components/Header/Header"
import { MainProduct } from "../Components/Main/MainProduct"
import { NavBar } from "../Components/NavBar/NavBar"

export const Main = ({cart, navigate,setCart, products, getProductsByCategory}) => {
    return (
        <>
            <Header navigate={navigate} getProductsByCategory={getProductsByCategory}/>
            <NavBar getProductsByCategory={getProductsByCategory}/>
            <MainProduct cart={cart} products={products} setCart={setCart} />
        </>
    )
}