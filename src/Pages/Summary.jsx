import { Header } from "../Components/Header/Header"
import { SummaryBody} from '../Components/Summary/SummaryBody'

export const Summary = ({navigate, cart,addressInfo, getProductsByCategory}) => {
    return (
        <>
            <Header navigate={navigate} getProductsByCategory={getProductsByCategory}/>
            <SummaryBody cart={cart} addressInfo={addressInfo}/>
        </>
    )
}