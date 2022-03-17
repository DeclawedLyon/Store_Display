import logo from './logo.svg';
import './App.css';
import { faker } from '@faker-js/faker';
import CategoryDisplay from './Components/CategoryElements/CategoryDisplay';
import NavBarHeader from './Components/NavigationElements/NavBarHeader';
import { useState } from 'react';
import SelectedCategoryDisplay from './Components/CategoryElements/SelectedCategoryDisplay';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [mainDisplay, setMainDisplay] = useState(true);
  const [productDisplay, setProductDisplay] = useState(false)
  // const randomName = faker.name.findName(); // Rowan Nikolaus
  // const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
  // const randomCard = faker.helpers.createCard(); // random contact card containing many properties
  // const randomProduct = faker.commerce.product()
  // console.log(randomCard)
  // console.log(randomProduct)

  const selectCategory = (categoryName) => {

  }
  return (
    <div className="App">
      <NavBarHeader />
      {mainDisplay && <CategoryDisplay mainDisplayToggle={setMainDisplay} categoryDisplayToggle={setProductDisplay} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>}
      {productDisplay && <SelectedCategoryDisplay mainDisplayToggle={setMainDisplay} categoryDisplayToggle={setProductDisplay} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>}
    </div>
  );
}

export default App;
