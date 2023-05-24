
import { useState } from 'react';
import './App.css';
import AddForm from './components/AddForm';
import ProductList from './components/ProductList';
import Search from './components/Search';

function App() {

  const [ products, setProducts ] = useState([])
  const [ filteredProducts, setFilteredProducts ] = useState([])

  // BONUS
  // const [ searchInput, setSearchInput ] = useState("")

  const [ isFormShowing, setIsFormShowing ] = useState(false)

  const añadirProducto = (newProduct) => {
    console.log(newProduct)

    //clone
    const clone = JSON.parse(JSON.stringify(products))
    clone.push(newProduct)

    //setProducts del clone y el producto nuevo
    setProducts(clone)
    setFilteredProducts(clone)
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

  const searchProduct = (search) => {
    console.log(search) // patata



    let filteredArr = products.filter((eachProduct) => {
      if (eachProduct.name.includes(search)) {
        return true // agrega el elemento
      } else {
        return false // no agregues el elemento
      }
    })

    console.log(filteredArr)
    setFilteredProducts(filteredArr)
  }

  return (
    <div className="App">

      <button onClick={ toggleForm }>{ isFormShowing === true ? "Ocultar" : "Mostrar"} Form</button>

      { isFormShowing === true ? <AddForm añadirProducto={añadirProducto}/> : null }
      

      <Search searchProduct={searchProduct}/>
      {/* //* BONUS */}
      {/* <Search setSearchInput={setSearchInput} searchInput={searchInput}/> */}

      <ProductList patata={ filteredProducts }/>
      {/* //* BONUS */}
      {/* <ProductList patata={ products.filter((eachProduct) => eachProduct.name.includes(searchInput)) }/> */}

    </div>
  );
}

export default App;
