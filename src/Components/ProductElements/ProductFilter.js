import './productFilter.css'
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableColumns, faTable } from '@fortawesome/free-solid-svg-icons' ;

export default function ProductFilter(props) {

  return (
    <form className="product-filter">
      <input type={'text'} placeholder='Search...' ></input>
      <div className="product-style-toggle">
        <button onClick={''}><FontAwesomeIcon className='rows-button' icon={faTableColumns} /></button>
        <button onClick={''}><FontAwesomeIcon className='grid-button' icon={faTable} /></button>
      </div>
    </form>
  )
}