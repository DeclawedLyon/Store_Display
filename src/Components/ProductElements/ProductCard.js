import './productDisplay.css'

export default function ProductCard(props) {
  // console.log(props.product)

  return (
    <div className="product-card" >
      <img className="product-image-main" src={props.product.image} alt="main product image" ></img>
      <h2>{props.product.productName}</h2>
      <span>{props.product.sku}</span>
      <div className="regular-price">
        <p>Regular Price:</p>
        <span>{props.product.price}</span>
      </div>
      <div className="sale-price">
        <p>Sale Price:</p>
        <span>{props.product.sale}</span>
      </div>
      <div className="details-container">
        <p className="details">{props.product.description}</p>
        <span>Tags: {props.product.specs}</span>
      </div>
    </div>
  )
}