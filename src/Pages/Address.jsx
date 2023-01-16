import { AddresForm } from "../Components/Address/AddressForm"
import { Header } from "../Components/Header/Header"

export const Address = ({navigate, cart, addressInfo, setAddressInfo, getProductsByCategory}) => {
    return (
        <>
            <Header navigate={navigate} getProductsByCategory={getProductsByCategory}/>
            <AddresForm navigate={navigate} cart={cart} addressInfo={addressInfo} setAddressInfo={setAddressInfo}/>
        </>
    )
}