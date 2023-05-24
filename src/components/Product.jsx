

// function Product({ product: { name, price } }) {
function Product(props) {
  console.log(props)

  // const { name, price } = props.product

  return (
    <div>
      {/* <h5>
        <span>Name: {props.name} . </span>
        <span>Price: {props.price}</span>
      </h5> */}
      <h5>
        <span>Name: {props.product.name} . </span>
        <span>Price: {props.product.price}</span>
      </h5>
    </div>
  )
}

export default Product