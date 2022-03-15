import logo from './logo.svg';
import './App.css';
import { faker } from '@faker-js/faker';
import CategoryDisplay from './Components/CategoryDisplay';
import NavBarHeader from './Components/NavigationElements/NavBarHeader';

function App() {
  // const randomName = faker.name.findName(); // Rowan Nikolaus
  // const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
  // const randomCard = faker.helpers.createCard(); // random contact card containing many properties
  // const randomProduct = faker.commerce.product()
  // console.log(randomCard)
  // console.log(randomProduct)
  return (
    <div className="App">
      <NavBarHeader />
      <CategoryDisplay />
     
    </div>
  );
}

export default App;
