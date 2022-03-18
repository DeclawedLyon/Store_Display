import CategoryDisplayCard from "./CategoryCard";
import './categoryDisplay.css'
import artImage from '../../Images/art3.jpg'
import outdoorImage from '../../Images/outdoor.jpg';
import homeDecorImage from '../../Images/homeDecor.jpg';
import floralImage from '../../Images/floral2.jpg';
import plantsImage from '../../Images/cedars2.jpg';
import picksImage from '../../Images/stems.jpg';
import wallDecorImage from '../../Images/wallDecor.jpg';
import clearanceImage from '../../Images/sale.jpg';
import xmasImage from '../../Images/seasonal.jpg';
import { useEffect, useState } from "react";

export default function CategoryDisplay(props) {
  const dummyCategories = ['Art', 'Outdoor', 'Home Decor', 'Floral', 'Plants & Trees', 'Picks & Stems', 'Wall Decor', 'Clearance', 'Christmas & Seasonal']
  const [mainCategories, setMainCategories] = useState([]);
  const selectedCategory = props.selectedCategory
  // console.log('---',props)
  
  // const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    createCategories()
    // console.log(mainCategories)
  }, [])

  const createCategories = () => {
    const categoryElements = dummyCategories.map((category, x) => {
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

        return (
          <div key={`ck-${category}${x}`}>
            {selectedCategory ? '' : <CategoryDisplayCard 
              key={`ck-${category}${x}`} 
              id={`ck-${category}`} 
              categoryName={category} 
              imageSource={image}
              // setCategory={() => props.setCategory()}
              selectCategory={props.selectCategory}
              />
            }
          </div>
        )
    })
    setMainCategories(categoryElements);
  }

  return (
    <div className="category-display">
      {selectedCategory ? selectedCategory : mainCategories}
    </div>
  )
}