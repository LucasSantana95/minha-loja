import * as S from './styles'
import { SummaryCard } from '../SummaryCard'

export const Summary = () => {

    const purchasedProducts = JSON.parse(localStorage.getItem('Products'))
    const address = JSON.parse(localStorage.getItem('Address'))

    return (
        <S.Container>
            <h1>Resumo da Compra</h1>
            <S.Products>
                {purchasedProducts.map(item => (
                    <SummaryCard item={item} />
                ))}
            </S.Products>
            <S.Address>
                <h1>Resumo do Endereço de Destino</h1>
                <p><b>Cep: </b> {address.cep}</p>
                <p><b>Rua: </b> {address.street}</p>
                <p><b>Número: </b> {address.num} </p>
                <p><b>Complemento: </b> {address.complement}</p>
                <p><b>Cidade: </b> {address.city}</p>
                <p><b>UF: </b> {address.uf}</p>
            </S.Address>
        </S.Container>
    )
}