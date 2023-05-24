
import { useState } from 'react';
import './App.css';
import AddForm from './components/AddForm';
import ProductList from './components/ProductList';
import Search from './components/Search';

function App() {

  const [ products, setProducts ] = useState([
    { name: "agua", price: 2 },
    { name: "pizza", price: 4 },
    { name: "papel", price: 1 }
  ])

  const [ isFormShowing, setIsFormShowing ] = useState(false)

  const añadirProducto = (newProduct) => {
    console.log(newProduct)

    //clone
    const clone = JSON.parse(JSON.stringify(products))
    clone.push(newProduct)

    //setProducts del clone y el producto nuevo
    setProducts(clone)
    // setProducts( [...products, newProduct] )
    setIsFormShowing(false)
  }

  const toggleForm = () => {
    if (isFormShowing === true) {
      setIsFormShowing(false)
    } else {
      setIsFormShowing(true)
    }
    // setIsFormShowing( !isFormShowing )
  }

  return (
    <div className="App">

      <button onClick={ toggleForm }>{ isFormShowing === true ? "Ocultar" : "Mostrar"} Form</button>

      { isFormShowing === true ? <AddForm añadirProducto={añadirProducto}/> : null }
      

      <Search />

      <ProductList patata={ products }/>

    </div>
  );
}

export default App;
