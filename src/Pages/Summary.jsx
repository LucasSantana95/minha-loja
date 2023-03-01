import { Header } from "../Components/Header"
import { Summary} from '../Components/Summary'

export const SummaryPage = ({navigate, cart,addressInfo, getProductsByCategory}) => {
    return (
        <>
            <Header navigate={navigate} getProductsByCategory={getProductsByCategory}/>
            <Summary cart={cart} addressInfo={addressInfo}/>
        </>
    )
}