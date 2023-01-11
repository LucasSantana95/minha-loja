import React from "react";

export default function AddressForm(props) {

    return (
        <form className="Div-Address">
            <button onClick={()=>{props.handlePage('cart');}}>{'<'}</button>
            <h1>Endereço para Entrega</h1>
            <input type={'text'} placeholder='Cep' id="txtCep" onChange={(e)=>{
                if(e.target.value.length == 8){
                    props.validateCep(e.target.value);
                }
            }}></input>
            <input type={'text'} placeholder='Rua' id="txtRua" value={props.AddressInfo.street} readOnly></input>
            <input type={'text'} placeholder='Número' id="txtNum" onChange={(e)=>{props.AddressInfo.num = e.target.value}} ></input>
            <input type={'text'} placeholder='Complemento' id="txtComp" onChange={(e)=>{props.AddressInfo.complement = e.target.value}}></input>
            <input type={'text'} placeholder='Cidade' id="txtCidade" value={props.AddressInfo.city} readOnly></input>
            <input type={'text'} placeholder='Estado' id="txtEstado" value={props.AddressInfo.uf} readOnly></input>

            <button onClick={(e) => {
                e.preventDefault()
                props.checkout();
                props.handlePage('summary')
            }}>Confirmar</button>
        </form>
    )
}