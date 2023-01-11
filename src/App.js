import { useState, useEffect } from 'react';
import './App.css';
import CategoriesMenu from './CategoriesMenu';
import Header from './Header';
import Main from './Main';
import Cart from './Cart';
import AddressForm from './AddressForm';
import Summary from './Summary';
import Products from './sub-components/Products';
import CatButtons from './sub-components/CatButtons';
import CartRow from './sub-components/CartRow';
import PurchasedProduct from './sub-components/PurchasedProduct';
import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://localhost:3001'
})

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [buttons, setButtons] = useState([]);
  const [purchasedProducts, setPurchasedProducts] = useState([]);
  const [AddressInfo, setAddressInfo] = useState({
    'cep': '',
    'street': '',
    'num': '',
    'complement': '',
    'city': '',
    'uf': ''
  })
  const [page, setPage] = useState('main')
  const [cartValue, setCartValue] = useState(0)
  const [cartProducts, setCartProducts] = useState([])
  const [removedProduct, setRemovedProduct] = useState({});
  const categories = [
    { 'description': 'Baterias', 'id': 'Batteries' },
    { 'description': 'Cabos', 'id': 'Cables' },
    { 'description': 'Conectores', 'id': 'Connectors' },
    { 'description': 'Estação de Recarga', 'id': 'Charging-stations' },
    { 'description': 'Fixações', 'id': 'Fixings' },
    { 'description': 'Inversores', 'id': 'Inverters' },
    { 'description': 'Módulos', 'id': 'Modules' },
    { 'description': 'Proteções Elétricas', 'id': 'Electrical-Protectors' }
  ]

  async function api() {
    let list = await axios.get('/');
    fillProductList(list.data);
  }
  function fillProductList(products) {
    let newlist = []
    for (const product of products) {
      let newproduct = <Products key={product.id} product={product} cart={cart} handleCart={handleCart} />
      newlist.push(newproduct);
    }
    setProducts(newlist);
  }
  function createCatButtons() {
    for (const categorie of categories) {
      let button = <CatButtons key={categorie.id} categorie={categorie} handleCategories={handleCategories} />
      setButtons(prevList => [prevList, button]);
    }
  }
  async function handleCategories(cat) {
    let catProducts = await axios.get(`/${cat}`)
    fillProductList(catProducts.data);
  }
  function handlePage(page) {
    setPage(page);
  }
  function handleCart(product) {
    for (const item of cartProducts) {
      if (item.id === product.id) {
        if (window.confirm('Produto ja adicinado ao carrinho, deseja adicionar a quantidade ao valor anterior?')) {
          item.quantity = parseInt(product.quantity) + parseInt(item.quantity);
        }
        return '';
      }
    }
    let newRow = createCartCard(product);
    setCartProducts(prevList => [...prevList, product])
    setCart(prevList => [...prevList, newRow])
    alert(`O Produto ${product.name} foi adicionado ao carrinho!`)
  }
  function createCartCard(product){
    let cartCard = <CartRow key={product.id} product={product} handleRemoveProductCart={handleRemoveProductCart} />
    return cartCard;
  }
  function handleRemoveProductCart(product) {
    setRemovedProduct(product)
  }
  function handlePurchasedProducts(cartProducts) {
    for (const product of cartProducts) {
      let newproduct = <PurchasedProduct key={product.id} product={product} />
      setPurchasedProducts(prevList => [...prevList, newproduct])
    }
  }
  function checkout(){
    axios.post('/produto', {
      'Products' : purchasedProducts,
      'Address': AddressInfo
    })
  }
  function validateCep(cep) {
    axios.get(`//viacep.com.br/ws/${cep}/json/`).then((result) => {
      if (result.data.erro) {
        alert('cep invalido');
      } else {
        setAddressInfo({
          'cep': result.data.cep,
          'street': result.data.logradouro,
          'num': '',
          'complement': '',
          'city': result.data.localidade,
          'uf': result.data.uf
        })
      }
    })
  }
  useEffect(() => {
    api()
    createCatButtons()
  }, []);
  useEffect(()=>{
    let newCartValue = 0;
    for (const product of cartProducts) {
      newCartValue += product.quantity * product.value;
    }
    setCartValue(newCartValue);
  }, [cartProducts])
  useEffect(()=>{
    let newCart = [];
    let newCartProduts = [];
    for (const item of cartProducts) {
      if (item.id !== removedProduct.id) {
        newCart.push(createCartCard(item));
        newCartProduts.push(item);
      }
    }
    setCart(newCart);
    setCartProducts(newCartProduts);
  },[removedProduct])

  switch (page) {
    case 'main': return (
      <div className="App">
        <Header handlePage={handlePage} api={api} />
        <CategoriesMenu>{buttons}</CategoriesMenu>
        <Main>{products}</Main>
      </div>
    );
    case 'cart': return (
      <div className="App">
        <Header handlePage={handlePage} api={api} />
        <Cart cart={cart} setCartValue={setCartValue} cartValue={cartValue} cartProducts={cartProducts} handlePurchasedProducts={handlePurchasedProducts} handlePage={handlePage} />
      </div>
    );
    case 'address': return (
      <div className="App">
        <Header handlePage={handlePage} api={api} />
        <AddressForm validateCep={validateCep} AddressInfo={AddressInfo} handlePage={handlePage} checkout={checkout} />
      </div>
    );
    case 'summary': return (
      <div className="App">
        <Header handlePage={handlePage} api={api} />
        <Summary purchasedProducts={purchasedProducts} AddressInfo={AddressInfo}/>
      </div>
    );
    default: return "Pagina não existe"
  }
}

export default App;
