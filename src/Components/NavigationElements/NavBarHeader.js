import silkPlantLogo from '../../Images/Logo_Silk_Plant_Warehouse_-_Colour_140x@2x.png'
// src/Components/NavigationElements/NavBarHeader.js
import './navbar-header.css'

export default function NavBarHeader(props) {

  return (
    <nav className='navbar-top'>
      <a href="#" onClick={() => props.returnHome()}><img src={silkPlantLogo}  alt='Company Logo' className='company-logo'></img></a>
        <div>
        <a href="cart" className='cart-button'>Cart</a>
        <a href="login" className='logout-button'>Logout</a>
      </div>
    </nav>
  )
}