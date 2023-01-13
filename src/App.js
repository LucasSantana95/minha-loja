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
  const [removedProduct, setRemovedProduct] = useState();
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
  // função que chama a api do back, recebendo a lista dos produtos
  async function apiCall() {
    let list = await axios.get('/produto');
    fillProductList(list.data);
  }
  // função que cria os cards dos produtos listados
  function fillProductList(products) {
    let newlist = []
    for (const product of products) {
      let newproduct = <Products key={product.id} product={product} cart={cart} handleCart={handleCart} />
      newlist.push(newproduct);
    }
    setProducts(newlist);
  }
  // função que cria os botões de categoria do menu lateral
  function createCatButtons() {
    for (const categorie of categories) {
      let button = <CatButtons key={categorie.id} categorie={categorie} handleCategories={handleCategories} />
      setButtons(prevList => [prevList, button]);
    }
  }
  // função onde filtra os produtos pela categoria clicada
  async function handleCategories(cat) {
    let catProducts = await axios.get(`/produto/${cat}`)
    fillProductList(catProducts.data);
  }
  // função para manipulação da pagina a ser visualizada
  function handlePage(page) {
    setPage(page);
  }
  // função para adicionar o produto selecionado no carrinho
  function handleCart(product) {
    let newRow = createCartCard(product);
    setCart(prevList => [...prevList, newRow])
    setCartProducts(prevList => [...prevList, product])
    alert(`O Produto ${product.name} foi adicionado ao carrinho!`)
  }
  // função que cria os cards do carrinho
  function createCartCard(product) {
    let cartCard = <CartRow key={product.id} teste={teste} product={product} handleRemoveProductCart={handleRemoveProductCart} />
    return cartCard;
  }
  // função para remover produto do carrinho
  function handleRemoveProductCart(product) {
    if (window.confirm('Deseja Remover esse Produto do Carrinho?')) {
      setRemovedProduct(product)
    }
  }
  // função para guardar os produtos que foram comprados
  function handlePurchasedProducts(cartProducts) {
    for (const product of cartProducts) {
      let newproduct = <PurchasedProduct key={product.id} product={product} />
      setPurchasedProducts(prevList => [...prevList, newproduct])
    }
  }
  // função para validar cep inserido pelo cliente
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
  // função que manda as informações da compra para o back
  function checkout() {
    axios.post('/produto', {
      'Products': purchasedProducts,
      'Address': AddressInfo
    })
  }
  function teste(produto){
    console.log(cartProducts)
    let index = cartProducts.findIndex(()=>{ return produto});
    console.log(produto)
    console.log(index)
  }
  // useEffect chamado ao carregar a pagina, para carregamento da lista de produtos e botões
  useEffect(() => {
    apiCall()
    createCatButtons()
  }, []);
  // useEffect para somar o valor total do carrinho
  useEffect(() => {
    let newCartValue = 0;
    for (const product of cartProducts) {
      newCartValue += product.quantity * product.value;
    }
    setCartValue(newCartValue);
  }, [cartProducts])
  // useEffect que da continuação a função de remover produto do carrinho
  useEffect(() => {
    let newCart = [];
    let newCartProduts = [];
    if (removedProduct) {
      for (const item of cartProducts) {
        if (item.id !== removedProduct.id) {
          newCart.push(createCartCard(item));
          newCartProduts.push(item);
        }
      }
      setCart(newCart);
      setCartProducts(newCartProduts);
    }
  }, [removedProduct])
  // useEffect para checkar se o produto é duplicado
  useEffect(() => {
    if (cart.length > 0) {
      for (let i = 0; i < cart.length - 1; i++) {
        if (cart[i].props.product.id === cart[cart.length - 1].props.product.id) {
          if (window.confirm('Produto ja adicinado ao carrinho, deseja adicionar a quantidade ao valor anterior?')) {
            cart[i].props.product.quantity = parseInt(cart[i].props.product.quantity) + parseInt(cart[cart.length - 1].props.product.quantity)
          }
          cart.pop();
          cartProducts.pop();
        }
      }

    }
  }, [cart])
  // switch para manupular a pagina
  switch (page) {
    case 'main': return (
      <div className="App">
        <Header handlePage={handlePage} apiCall={apiCall} />
        <CategoriesMenu>{buttons}</CategoriesMenu>
        <Main>{products}</Main>
      </div>
    );
    case 'cart': return (
      <div className="App">
        <Header handlePage={handlePage} apiCall={apiCall} />
        <Cart cart={cart} setCartValue={setCartValue} cartValue={cartValue} cartProducts={cartProducts} handlePurchasedProducts={handlePurchasedProducts} handlePage={handlePage} />
      </div>
    );
    case 'address': return (
      <div className="App">
        <Header handlePage={handlePage} apiCall={apiCall} />
        <AddressForm validateCep={validateCep} AddressInfo={AddressInfo} handlePage={handlePage} checkout={checkout} />
      </div>
    );
    case 'summary': return (
      <div className="App">
        <Header handlePage={handlePage} apiCall={apiCall} />
        <Summary purchasedProducts={purchasedProducts} AddressInfo={AddressInfo} />
      </div>
    );
    default: return "Pagina não existe"
  }
}

export default App;
