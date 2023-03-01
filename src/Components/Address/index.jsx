import { api } from '../../Services/Api';
import { useState } from 'react';
import * as S from './styles'

export const AddresForm = ({ navigate, setCart }) => {
    const [addressInfo, setAddressInfo] = useState({
        cep: '',
        street: '',
        num: '',
        complement: '',
        city: '',
        uf: ''
    })

    const validateCep = (e) => {
        if (e.target.value.length === 8) {
            api.get(`//viacep.com.br/ws/${e.target.value}/json/`).then((result) => {
                if (result.data.erro) {
                    alert('cep invalido');
                } else {
                    setAddressInfo({
                        cep: result.data.cep,
                        street: result.data.logradouro,
                        num: 'Sem Número',
                        complement: 'Sem Complemento',
                        city: result.data.localidade,
                        uf: result.data.uf
                    })
                }
            })
        } else if (e.target.value.length > 8) {
            let newString = e.target.value.slice(0, -1)
            e.target.value = newString
        }
    }
    const handleOnClick = (e) => {
        e.preventDefault()
        navigate('/summary')
        localStorage.setItem('Address', JSON.stringify(addressInfo))
        api.post('/purchase', { products: JSON.parse(localStorage.getItem('Products')), address: addressInfo })
        setCart([])
        setAddressInfo([])
    }

    return (
        <S.Form>
            <S.Container>
                <h1>Insira o Endereço para Entrega</h1>
                <S.Row>
                    <S.Input type="number" name="cep" maxLength={'2'} onChange={(e) => { validateCep(e) }} required autoFocus />
                    <S.Span><span>Cep</span></S.Span>
                    <S.CepLabel> *Digite Somente Numeros</S.CepLabel>
                </S.Row>
                <S.Row>
                    <S.Input type="text" name="street" value={addressInfo.street} required readOnly />
                    <S.Span><span>Rua</span></S.Span>
                </S.Row>
                <S.Row>
                    <S.Input type="number" name="num" onChange={e => { addressInfo.num = e.target.value }} required />
                    <S.Span><span>Número</span></S.Span>
                </S.Row>
                <S.Row>
                    <S.Input type="text" name="complement" onChange={e => { addressInfo.complement = e.target.value }} />
                    <S.Span><span>Complemento</span></S.Span>
                </S.Row>
                <S.Row>
                    <S.Input type="text" name="city" value={addressInfo.city} required readOnly />
                    <S.Span><span>Cidade</span></S.Span>
                </S.Row>
                <S.Row>
                    <S.Input type="text" name="uf" value={addressInfo.uf} required readOnly />
                    <S.Span><span>UF</span></S.Span>
                </S.Row>
                <S.Button onClick={(e) => {handleOnClick(e)}}>Confirmar</S.Button>
            </S.Container>
        </S.Form>
    )
}