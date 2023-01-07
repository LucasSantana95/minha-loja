import { useState } from 'react';
import './App.css';
import CategoriesMenu from './CategoriesMenu';
import Header from './Header';
import Products from './sub-components/Products';

function App() {

  const [products, setProducts] = useState([]);
  const categories = ['Bateria','Cabos','Conectores','Estação de Recarga','Fixações','Inversores','Módulos','Proteções Elétricas']

  return (
    <div className="App">
      <div>
        <Header/>
        <p>Página em manutenção</p>
        <Products products={products}/>
        <CategoriesMenu categories= {categories}/>
      </div>
    </div>
  );
}

export default App;
