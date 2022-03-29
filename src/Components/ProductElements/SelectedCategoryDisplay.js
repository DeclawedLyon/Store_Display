import faker from "@faker-js/faker"
import { useEffect, useState } from "react";
import ProductSidebar from "../NavigationElements/ProductSidebar";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";
import './selectedCategory.css'

export default function SelectedCategoryDisplay(props) {
  const [products, setProducts] = useState([])
  const [listDisplayToggle, setListDisplayToggle] = useState(false);

  useEffect(() => {
    seedProducts()
  }, [])

  const createProduct = () => {
    const randomProduct = faker.commerce.product();
    const price = faker.commerce.price(25, 250, 2, '$');
    const salePrice = price - (price * 0.1);
    const description = faker.commerce.productDescription();
    const specs = `${faker.commerce.productAdjective()}, ${faker.commerce.productMaterial()}` ;
    const image = fetch('https://picsum.photos/200')

    console.log(image)

    const dummyProduct = {
      productName: randomProduct,
      sku: Math.floor(Math.random() * 10000),
      price: price,
      sale: salePrice,
      description: description,
      specs: specs,
      image: `https://picsum.photos/${Math.floor(Math.random() * 200)}`
  
    }
    return dummyProduct
  }
  const seedProducts = () => {
    let x = 0
    const products = [];
    while(x < 50) {
      const product = createProduct();
      const newProduct = ( 
        <ProductCard 
          key={x} 
          product={product} 
          listDisplayToggle={listDisplayToggle} 
        />
      )
      products.push(newProduct);
      x++;
    }
    setProducts(products)
  }


  return (
    <div className="selected-category-display">
      <ProductSidebar />
      <div className="products-container">
        <ProductFilter setListDisplayToggle={setListDisplayToggle}/>
        <div className="rendered-products">
          {products}
        </div>
      </div>
    </div>
  )
}