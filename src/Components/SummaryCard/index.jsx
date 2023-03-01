import * as S from './styles'

export const SummaryCard = ({item}) => {
    return (
        <S.Container key={item.id}>
            <S.Figure>
                <img src={item.thumb}></img>
                {item.id}
            </S.Figure>
            <S.Infos>
                <p>
                    {item.name}
                </p>
                <p>
                    Categoria: {item.category}
                </p>
                <p>
                    Quantidade: {item.quantity}
                </p>
                <p>
                    Valor Unitário: R${item.value}
                </p>
            </S.Infos>
        </S.Container>
    )
}