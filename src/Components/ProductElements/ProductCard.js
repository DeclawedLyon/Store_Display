import { useState } from 'react';
import './productCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export default function ProductCard(props) {
  const [selected, setSelected] = useState(false);
  // console.log(props.product)
  const closeWindow = () => {
    if (selected === true) {
      console.log(selected);
      setSelected('');
      console.log(selected)
    }
  }

  return (

    <div className={`product-card ${selected ? '--selected' : ''}`} >
      <a href='#' ><img className={`product-image-main ${selected ? '--selected' : ''}`} src={props.product.image} alt="main product image" onClick={() => setSelected(true)} ></img></a>
      {selected ? <FontAwesomeIcon icon={faCircleXmark} className={'close-selected-product'} onClick={() => closeWindow()}/> : ''}
      <main className={`product-information ${props.listDisplayToggle ? "--wide" : ""}`} onClick={() => setSelected(true)} >
        <div className='product-card-header'>
          <h2>{props.product.productName}</h2>
        </div>
        <div className="regular-price">
          <p>Regular Price:</p>
          <span>{props.product.price}</span>
        </div>
        <div className="sale-price">
          <p>Sale Price:</p>
          <span>{props.product.sale}</span>
        </div>
        <span>{props.product.sku}</span>
        <div className="details-container">
          <p className="details">{props.product.description}</p>
          <span>Tags: {props.product.specs}</span>
        </div>
      </main>
    </div>

  )
}