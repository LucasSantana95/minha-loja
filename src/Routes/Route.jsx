import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartPage } from '../Pages/Cart';
import { MainPage } from '../Pages/Main';
import { AddressPage } from '../Pages/Address';
import { api } from '../Services/Api';
import { SummaryPage } from '../Pages/Summary';
import { useNavigate } from 'react-router-dom';

export const Rota = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]) 
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
            <Route path='/' element={<MainPage cart={cart} navigate={navigate} products={products} setCart={setCart} getProductsByCategory={getProductsByCategory} />} />
            <Route path='/cart' element={<CartPage navigate={navigate} cart={cart} setcart={setCart} getProductsByCategory={getProductsByCategory} />} />
            <Route path='/address' element={<AddressPage navigate={navigate} setCart={setCart} getProductsByCategory={getProductsByCategory} />} />
            <Route path='/summary' element={<SummaryPage navigate={navigate} getProductsByCategory={getProductsByCategory} />} />
        </Routes>
        
    )
}