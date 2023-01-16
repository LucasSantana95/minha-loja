import './style.css'

export const SummaryBody = ({ cart, addressInfo }) => {
    return (
        <>
            <div className='summary-body'>

                <h1>Resumo da Compra</h1>
                <div className="div-products" >
                    {cart.map(e => (
                        <>
                            <div key={e.id} className='card-product-summary'>
                                <figure className='card-figure'>
                                    <img src={e.thumb} className='card-image'></img>
                                        {e.id}
                                </figure>
                                <div className='card-product-info'>
                                    <p className='card-name-summary'>
                                        {e.name}
                                    </p>
                                    <p className='card-category-summary'>
                                        Categoria: {e.category}
                                    </p>
                                    <p className='card-quantity-summary'>
                                        Quantidade: {e.quantity}
                                    </p>
                                    <p className='card-value-summary'>
                                        Valor Unitário: R${e.value}
                                    </p>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
                <div className="address-info-summary">
                        <h1>Resumo do Endereço de Destino</h1>
                        <div>
                            
                            <p><b>Cep: </b> {addressInfo.cep}</p>
                            <p><b>Rua: </b> {addressInfo.street}</p>
                            <p><b>Número: </b> {addressInfo.num} </p>
                            <p><b>Complemento: </b> {addressInfo.complement}</p>
                            <p><b>Cidade: </b> {addressInfo.city}</p>
                            <p><b>UF: </b> {addressInfo.uf}</p>
                        </div>
                </div>
            </div>
        </>
    )
}