import silkPlantLogo from '../../Logo_Silk_Plant_Warehouse_-_Colour_140x@2x.png'
// src/Components/NavigationElements/NavBarHeader.js

export default function NavBarHeader(props) {

  return (
    <nav>
      <a href="#"><img src={silkPlantLogo}  alt='Company Logo'></img></a>
    </nav>
  )
}