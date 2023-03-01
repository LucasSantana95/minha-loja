import { AddresForm } from "../Components/Address"
import { Header } from "../Components/Header"

export const AddressPage = ({navigate, setCart, getProductsByCategory}) => {
    return (
        <>
            <Header navigate={navigate} getProductsByCategory={getProductsByCategory}/>
            <AddresForm navigate={navigate} setCart={setCart}/>
        </>
    )
}