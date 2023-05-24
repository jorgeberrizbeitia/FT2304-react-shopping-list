import { useState } from "react"


function Search(props) {

  const [ searchInput, setSearchInput ] = useState("")

  const handleSearchChange = (event) => {
    // 1. guardar el valor en el estado 
    setSearchInput(event.target.value) 
    //* BONUS
    // props.setSearchInput(event.target.value)

    // .todas las funciones que actualizan estado se ejecutan de forma asincrona.
    // NO podemos acceder al estado actualizado justo despues de haber hecho la actualización

    console.log(event.target.value)
    console.log(searchInput) // desactualizada

    // 2. tendremos que filtrar el array de todos los productos
    // props.searchProduct(searchInput) // NO, estado desactualizado
    props.searchProduct(event.target.value)

    

  }

  return (
    <div>
      
        <h2>Busquedas</h2>

        <input type="text" name="search" value={searchInput} onChange={handleSearchChange}/>
        {/* BONUS */}
        {/* <input type="text" name="search" value={props.searchInput} onChange={handleSearchChange}/> */}

    </div>
  )
}

export default Search