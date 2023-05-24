import { useState } from "react"

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { Container } from "react-bootstrap"


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
    
    setNameInput("")
    setPriceInput(0)

  }

  return (
    <div>
      
      <h2>Formulario de agregar</h2>

      <Container>
        <Form onSubmit={ handleFormSubmit }>

          <Form.Group>
            <Form.Label htmlFor="name">Nombre:</Form.Label>
            <Form.Control type="text" name="name" onChange={handleNameChange} value={nameInput}/>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="price">Precio</Form.Label>
            <Form.Control type="number" name="price" onChange={handlePriceChange} value={priceInput}/>
          </Form.Group>

          <Button variant="success" type="submit">Agregar</Button>

        </Form>
      </Container>


    </div>
  )
}

export default AddForm