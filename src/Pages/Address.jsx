import { AddresForm } from "../Components/Address/AddressForm"
import { Header } from "../Components/Header/Header"

export const Address = ({navigate, setCart, getProductsByCategory}) => {
    return (
        <>
            <Header navigate={navigate} getProductsByCategory={getProductsByCategory}/>
            <AddresForm navigate={navigate} setCart={setCart}/>
        </>
    )
}