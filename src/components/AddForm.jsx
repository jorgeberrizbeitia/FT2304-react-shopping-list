import { useState } from "react"


function AddForm(props) {

  const [ nameInput, setNameInput ] = useState("")
  const [ priceInput, setPriceInput ] = useState(0)

  const handleNameChange = (event) => {
    console.log("escribiendo en campo name", event.target.value)
    let value = event.target.value.toLowerCase()
    setNameInput(value)
  }

  const handlePriceChange = (event) => setPriceInput(event.target.value)

  const handleFormSubmit = (event) => {
    event.preventDefault() // es una funcion del evento que detiene todos los comportamientos predeterminads del evento

    // 1. recopilar la data del nuevo producto
    const newProduct = {
      name: nameInput,
      price: priceInput
    }
    console.log(newProduct)
    
    // 2. Agregar ese producto al array de productos
    props.añadirProducto( newProduct )
    
    // setNameInput("")
    // setPriceInput(0)

  }

  return (
    <div>
      
      <h2>Formulario de agregar</h2>

      <form onSubmit={ handleFormSubmit }>

        <label htmlFor="name">Nombre:</label>
        <input type="text" name="name" onChange={handleNameChange} value={nameInput}/>

        <br />

        <label htmlFor="price">Precio</label>
        <input type="number" name="price" onChange={handlePriceChange} value={priceInput}/>

        <br />

        <button>Agregar</button>

      </form>

    </div>
  )
}

export default AddForm