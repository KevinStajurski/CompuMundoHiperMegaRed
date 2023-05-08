import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'
import { CartContext } from '../context/CartContext'
import './ItemDetail.css'

export const ItemDetail = ({ id, title, image, price, description, stock }) => {

  //Variable para navegacion
  const navigate = useNavigate()

  //Funcion del boton volver del detalle del item
  const back = () => {
    navigate(-1)
  }

  //Contador de la cantidad del item a agregar
  const [counter, setCounter] = useState(1)
  
  //Funcion traida del contexto para agregar el producto al carrito
  const { addItem } = useContext(CartContext)
  
  //Funcion para crear el producto con la cantidad
  const onAdd = () => {
    if (stock > 0) {
      const newItem = {
        id,
        title,
        image,
        price,
        description,
        stock,
        counter
      }
      addItem(newItem)
    } else {
      alert("No hay stock")
    }
  }

  //Buscar el indice del producto en el cart y aumentar el counter
  //cart[(cart.findIndex(prod => prod.id === id))].counter++

  return (
    <div className='divItemDetail'>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>Precio: $ {price}</p>
      <p>Descripcion: {description}</p>
      <p>ID: {id}</p>
      <p>Stock: {stock}</p>
      <ItemCount stock={stock} onAdd={onAdd} counter={counter} setCounter={setCounter} />
      <Link to={'/cart'}>
        <button>Finalizar compra</button>
      </Link>
      <button onClick={back}>Volver</button>
    </div>
  )
}