import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";

export default function Products(props) {
    let quantity = 1;
    return (
        <Card style={{ width: '22rem', border: '1px solid gray', margin: '30px' }}>
            <Card.Img variant="top" src={props.product.thumb} />
            <Card.Body>
                <Card.Title>{props.product.name}</Card.Title>
                <Card.Text>
                    Categoria: {props.product.category}<br/>
                    Código: {props.product.id}<br/>
                    Quantidade: <input type={'number'} style={{ "width": "30px" }} defaultValue={1} min='1' onChange={(e) => { quantity = e.target.value }} /><br/>
                    Valor: R${props.product.value}
                </Card.Text>
                <Button variant="primary" onClick={() => {
                    let product = {
                        'id': props.product.id,
                        'name': props.product.name,
                        'value': props.product.value,
                        'category': props.product.category,
                        'quantity': quantity,
                        'thumb': props.product.thumb
                    }
                    props.handleCart(product)
                }}>Adicionar ao Carrinho</Button>
            </Card.Body>
        </Card>
    )
}