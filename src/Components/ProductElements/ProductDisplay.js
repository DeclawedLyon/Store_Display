import './productDisplay.css'

export default function ProductCard(props) {
  console.log(props.product)

  return (
    <div className="product-card" >
      <img className="product-image-main" src={props.product.image} alt="main product image" ></img>
      <h2>{props.product.productName}</h2>
      <span>{props.product.sku}</span>
      <div className="regular-price">
        <span>Regular Price</span>
        <span>{props.product.price}</span>
      </div>
      <div className="sale-price">
        <span>Sale Price</span>
        <span>{props.product.sale}</span>
      </div>
      <div className="details-container">
        <p className="details">{props.product.description}</p>
        <span>{props.product.specs}</span>
      </div>
      TREE STUFF HERE
    </div>
  )
}