import silkPlantLogo from '../../images/Logo_Silk_Plant_Warehouse_-_Colour_140x@2x.png'
// src/Components/NavigationElements/NavBarHeader.js
import './navbar-header.css'

export default function NavBarHeader(props) {

  return (
    <nav className='navbar-top'>
      <a href="#"><img src={silkPlantLogo}  alt='Company Logo'></img></a>
        <div>
        <a href="cart">Cart</a>
        <a href="login">Logout</a>
      </div>
    </nav>
  )
}