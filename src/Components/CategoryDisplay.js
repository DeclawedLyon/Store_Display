import CategoryDisplayCard from "./CategoryDisplayCard";

export default function CategoryDisplay(props) {
  const dummyCategories = ['Art', 'Outdoor', 'Home Decor', 'Floral', 'Plants & Trees', 'Picks & Stems', 'Wall Decor', 'Clearance', 'Christmas & Seasonal']
  return (
    <div className="category-display">
      {dummyCategories.map(category => {
      console.log(category)
        return (
          <CategoryDisplayCard categoryName={category} />
        )
      })}
    </div>
  )
}