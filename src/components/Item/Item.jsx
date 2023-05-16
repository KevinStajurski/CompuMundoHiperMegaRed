import { Link } from "react-router-dom"
import "./Item.css"
export const Item = ({ item }) => {

  return (
    <Link className='link' to={`/item/${item.id}`}>
      <div className="Producto">
        <img src={item.image} alt={item.title} className="Img" />
        <h2>{item.title}</h2>
        <p>$ {item.price}</p>
      </div>
    </Link>
  )
}