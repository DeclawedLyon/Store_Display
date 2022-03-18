import './categoryCard.css'

export default function CategoryDisplayCard(props) {
  // console.log(props.selectCategory)
  // const selectCategory = props.selectCategory()
  // console.log(selectCategory)

  
  return (
    <div className="category-card" onClick={() => props.selectCategory(props.categoryName)}>
      <span>{props.categoryName}</span>
      <img src={props.imageSource} alt='category image' ></img>
    </div>
  )
}