import "./Item.css"
import { Link } from "react-router-dom"
export const Item = ({producto}) => {
  return (
    <Link to={`/item/${producto.id}`}>
      <div className="Producto">
        <img src={producto.image} alt={producto.title} className="Img"/>
        <h2>{producto.title}</h2>
        <p>$ {producto.price}</p>
      </div>
    </Link>
  )
}