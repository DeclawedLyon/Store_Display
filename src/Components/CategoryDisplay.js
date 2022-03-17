import CategoryDisplayCard from "./CategoryCard";
import './categoryDisplay.css'
import artImage from '../images/art3.jpg'
import outdoorImage from '../images/outdoor.jpg';
import homeDecorImage from '../images/homeDecor.jpg';
import floralImage from '../images/floral2.jpg';
import plantsImage from '../images/cedars2.jpg';
import picksImage from '../images/stems.jpg';
import wallDecorImage from '../images/wallDecor.jpg';
import clearanceImage from '../images/sale.jpg';
import xmasImage from '../images/seasonal.jpg';
import { useState } from "react";

export default function CategoryDisplay(props) {
  const dummyCategories = ['Art', 'Outdoor', 'Home Decor', 'Floral', 'Plants & Trees', 'Picks & Stems', 'Wall Decor', 'Clearance', 'Christmas & Seasonal']
  const [selectedCategory, setSelectedCategory] = useState('')
  return (
    <div className="category-display">
      
      {dummyCategories.map(category => {
        let image = ''
        switch(category) {
          case 'Art':
            image = artImage
            break;
          case 'Outdoor':
            image = outdoorImage;
            break;
          case 'Home Decor':
            image = homeDecorImage;
            break;
          case 'Floral':
            image = floralImage;
            break;
          case 'Plants & Trees':
            image = plantsImage;
            break;
          case 'Picks & Stems':
            image = picksImage;
            break;
          case 'Wall Decor':
            image = wallDecorImage;
            break;
          case 'Clearance':
            image = clearanceImage;
            break;
          case 'Christmas & Seasonal':
            image = xmasImage;
            break;
          
        }
        // console.log(category)
          return (
            <div>
              {selectedCategory ? '' : <CategoryDisplayCard categoryName={category} imageSource={image}/>}

            {/* <CategoryDisplayCard 
              categoryName={category} 
              imageSource={image}
            /> */}
            </div>
          )
      })}
    </div>
  )
}