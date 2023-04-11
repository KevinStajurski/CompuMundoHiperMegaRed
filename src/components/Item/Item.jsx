import "./Item.css"
const Item = ({producto}) => {
  return(
    <div className="Producto">
      <img src={producto.image} alt={producto.title} className="Img"/>
      <h2>{producto.title}</h2>
      <p>$ {producto.price}</p>
    </div>
  )
}

export default Item