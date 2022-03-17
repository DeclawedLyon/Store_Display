import './categoryCard.css'

export default function CategoryDisplayCard(props) {
  const openCategory = () => {

  }
  
  return (
    <div className="category-card" onClick={() => openCategory()}>
      <span>{props.categoryName}</span>
      <img src={props.imageSource} alt='category image' ></img>
    </div>
  )
}