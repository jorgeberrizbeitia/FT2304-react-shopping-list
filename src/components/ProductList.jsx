import Product from "./Product"


function ProductList(props) {

  console.log(props)



  return (
    <div>
      
        <h2>Lista de Productos</h2>

        {/* // renderizar un Product por cada producto */}
        {props.patata.map((eachProduct, index) => {
          return (
            // <Product key={index} name={eachProduct.name} price={eachProduct.price}/>
            <Product key={index} product={eachProduct}/>
          )
        })}

    </div>
  )
}

export default ProductList