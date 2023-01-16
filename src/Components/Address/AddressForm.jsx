import './style.css'
import { api } from '../../Services/Api';

export const AddresForm = ({ navigate, cart, addressInfo, setAddressInfo }) => {

    const validateCep = (cep) => {
        if (cep.length === 8) {
            api.get(`//viacep.com.br/ws/${cep}/json/`).then((result) => {
                if (result.data.erro) {
                    alert('cep invalido');
                } else {
                    setAddressInfo({
                        'cep': result.data.cep,
                        'street': result.data.logradouro,
                        'num': '',
                        'complement': 'Sem Complemento',
                        'city': result.data.localidade,
                        'uf': result.data.uf
                    })
                }
            })
        }
    }

    return (
        <>
            <form className="address-form">
                <div className='container'>

                <h1>Insira o Endereço para Entrega</h1>
                <div key={'cep'} className='address-input-div'>
                    <input type="text" name="cep" className="address-input" id="cep-input" onChange={(e)=>{validateCep(e.target.value)}} required />
                    <label htmlFor="nme" className='label-span'><span>Cep</span></label>
                </div>
                <div key={'street'} className='address-input-div'>
                    <input type="text" name="street" className="address-input" id="street-input" value={addressInfo.street} required readOnly />
                    <label htmlFor="nme" className='label-span'><span>Rua</span></label>
                </div>
                <div key={'num'} className='address-input-div'>
                    <input type="text" name="num" className="address-input" id="num-input" onChange={e => { addressInfo.num = e.target.value }} required />
                    <label htmlFor="nme" className='label-span'><span>Número</span></label>
                </div>
                <div key={'complement'} className='address-input-div'>
                    <input type="text" name="complement" className="address-input" id="complement-input" onChange={e => { addressInfo.complement = e.target.value }} />
                    <label htmlFor="nme" className='label-span'><span>Complemento</span></label>
                </div>
                <div key={'city'} className='address-input-div'>
                    <input type="text" name="city" className="address-input" id="city-input" value={addressInfo.city} required readOnly/>
                    <label htmlFor="nme" className='label-span'><span>Cidade</span></label>
                </div>
                <div key={'uf'} className='address-input-div'>
                    <input type="text" name="uf" className="address-input" id="uf-input" value={addressInfo.uf} required readOnly />
                    <label htmlFor="nme" className='label-span'><span>UF</span></label>
                </div>

                <button onClick={(e) => {
                    e.preventDefault()
                    navigate('/summary')
                    api.post('/produto', { produtos: cart, endereco: addressInfo })
                }}>Confirmar</button>
                </div>
            </form>
        </>
    )
}