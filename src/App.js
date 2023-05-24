
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddForm from './components/AddForm';
import ProductList from './components/ProductList';
import Search from './components/Search';

// Styled Components
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Toast from 'react-bootstrap/Toast';

function App() {

  const [ products, setProducts ] = useState([])
  const [ filteredProducts, setFilteredProducts ] = useState([])

  // BONUS
  // const [ searchInput, setSearchInput ] = useState("")

  const [ isFormShowing, setIsFormShowing ] = useState(false)

  // Estado para el Toast
  const [ isToastShowing, setIsToastShowing ] = useState(false)

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
    // activariamos el Toast
    setIsToastShowing(true)
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

      <Button variant="info" onClick={ toggleForm }>{ isFormShowing === true ? "Ocultar" : "Mostrar"} Form</Button>

      {/* { isFormShowing === true ? <AddForm añadirProducto={añadirProducto}/> : null } */}
      <Collapse in={isFormShowing}>
        <div>
          <AddForm añadirProducto={añadirProducto}/>
        </div>
      </Collapse>
      

      <Search searchProduct={searchProduct}/>
      {/* //* BONUS */}
      {/* <Search setSearchInput={setSearchInput} searchInput={searchInput}/> */}

      <ProductList patata={ filteredProducts }/>
      {/* //* BONUS */}
      {/* <ProductList patata={ products.filter((eachProduct) => eachProduct.name.includes(searchInput)) }/> */}

      <Toast onClose={() => setIsToastShowing(false)} show={isToastShowing} delay={2000} autohide bg="danger">
        <Toast.Header>
          <p>Agregaste un producto! {filteredProducts.length > 0 && filteredProducts[filteredProducts.length - 1].name}</p>
        </Toast.Header>
      </Toast>


    </div>
  );
}

export default App;
