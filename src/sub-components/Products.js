import React from "react";

export default function Products(props) {
    let quantity = 0;
    return (
        <div className="Card-Products">
            <img src={props.product.thumb} alt="thumb do produto"></img>
            <p>{props.product.name}</p>
            <p>Categoria: {props.product.category}</p>
            <p>Código: {props.product.id}</p>
            <p>Quantidade: <input type={'number'} defaultValue={1} min='1' onChange={(e)=>{quantity = e.target.value}} /></p>
            <p>Valor: R${props.product.value}</p>
            <button onClick={()=>{
                let product = {
                    'id':props.product.id,
                    'name':props.product.name,
                    'value':props.product.value,
                    'category':props.product.category,
                    'quantity':quantity,
                    'thumb':props.product.thumb
                }
                 props.handleCart(product) }}>Adicionar ao Carrinho</button>
        </div>
    )
}
