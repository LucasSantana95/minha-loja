import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Cart } from '../Pages/Cart';
import { Main } from '../Pages/Main';
import { Address } from '../Pages/Address';
import { api } from '../Services/Api';
import { Summary } from '../Pages/Summary';
import { useNavigate } from 'react-router-dom';

export const Rota = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]) 
    const [addressInfo, setAddressInfo] = useState({})
    const navigate = useNavigate();
    const getProducts = () => {
        api
            .get('/produto')
            .then((res) => {
                setProducts(res.data);
            })
    }
    const getProductsByCategory = (category) => {
        api
            .get(`/produto/${category}`)
            .then((res)=>{
            setProducts(res.data)
            })
    }
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <Routes>
            <Route path='/' element={<Main cart={cart} navigate={navigate} products={products} setCart={setCart} getProductsByCategory={getProductsByCategory} />} />
            <Route path='/cart' element={<Cart navigate={navigate} cart={cart} setcart={setCart} getProductsByCategory={getProductsByCategory} />} />
            <Route path='/address' element={<Address navigate={navigate} cart={cart} addressInfo={addressInfo} setAddressInfo={setAddressInfo} getProductsByCategory={getProductsByCategory} />} />
            <Route path='/summary' element={<Summary navigate={navigate} cart={cart} addressInfo={addressInfo} getProductsByCategory={getProductsByCategory} />} />
        </Routes>
        
    )
}