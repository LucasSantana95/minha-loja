import './style.css'
import { api } from '../../Services/Api';
import { useState } from 'react';

export const AddresForm = ({ navigate, setCart }) => {
    const [addressInfo, setAddressInfo] = useState({
        cep : '',
        street : '',
        num : '',
        complement : '',
        city : '',
        uf : ''
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
        }else if(e.target.value.length > 8){
            let newString = e.target.value.slice(0 , -1)
            e.target.value = newString
        }
    }

    return (
        <>
            <form className="address-form">
                <div className='container'>

                <h1>Insira o Endereço para Entrega</h1>
                <div key={'cep'} className='address-input-div'>
                    <input type="number" name="cep" className="address-input" id="cep-input" maxLength={'2'} onChange={(e)=>{validateCep(e)}} required autoFocus />
                    <label className='label-span'><span>Cep</span></label>
                    <label className='cep-label'> *Digite Somente Numeros</label>
                </div>
                <div key={'street'} className='address-input-div'>
                    <input type="text" name="street" className="address-input" id="street-input" value={addressInfo.street} required readOnly />
                    <label className='label-span'><span>Rua</span></label>
                </div>
                <div key={'num'} className='address-input-div'>
                    <input type="number" name="num" className="address-input" id="num-input" onChange={e => { addressInfo.num = e.target.value }} required />
                    <label className='label-span'><span>Número</span></label>
                </div>
                <div key={'complement'} className='address-input-div'>
                    <input type="text" name="complement" className="address-input" id="complement-input" onChange={e => { addressInfo.complement = e.target.value }} />
                    <label className='label-span'><span>Complemento</span></label>
                </div>
                <div key={'city'} className='address-input-div'>
                    <input type="text" name="city" className="address-input" id="city-input" value={addressInfo.city} required readOnly/>
                    <label className='label-span'><span>Cidade</span></label>
                </div>
                <div key={'uf'} className='address-input-div'>
                    <input type="text" name="uf" className="address-input" id="uf-input" value={addressInfo.uf} required readOnly />
                    <label className='label-span'><span>UF</span></label>
                </div>

                <button onClick={(e) => {
                    e.preventDefault()
                    navigate('/summary')
                    localStorage.setItem('Address', JSON.stringify(addressInfo))
                    api.post('/purchase', { products : JSON.parse(localStorage.getItem('Products')) , address : addressInfo})
                    setCart([])
                    setAddressInfo([])

                }}>Confirmar</button>
                </div>
            </form>
        </>
    )
}