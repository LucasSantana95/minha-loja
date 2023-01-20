import { AddresForm } from "../Components/Address/AddressForm"
import { Header } from "../Components/Header/Header"

export const Address = ({navigate, setCart, addressInfo, setAddressInfo, getProductsByCategory}) => {
    return (
        <>
            <Header navigate={navigate} getProductsByCategory={getProductsByCategory}/>
            <AddresForm navigate={navigate} setCart={setCart} addressInfo={addressInfo} setAddressInfo={setAddressInfo}/>
        </>
    )
}