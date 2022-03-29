import './productFilter.css'
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableColumns, faTable } from '@fortawesome/free-solid-svg-icons' ;
import { useEffect } from 'react';

export default function ProductFilter(props) {
  useEffect(() => {

  }, [props.sale])

  const calculateSale = () => {

  }

  const handleClick = () => {
    console.log('hello :3')
  }

  return (
    <div className='filter-component'>
      <form className="product-filter">
        <input type={'text'} placeholder='Search...' ></input>
      </form>
      <div className="product-style-toggle">
        <button onClick={() => {
          handleClick()
          props.setListDisplayToggle(true)
        }} className="display-button-lists"><FontAwesomeIcon className='rows-button' icon={faTableColumns} /></button>
        <button onClick={() => handleClick()} className="display-button-icons"><FontAwesomeIcon className='grid-button' icon={faTable} /></button>
      </div>
    </div>
  )
}