import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'
import {CartContext} from '../context/CartContext'
import './ItemDetail.css'

export const ItemDetail = ({id, title, image, price, description, stock}) => {
  //contador de la cantidad del item a agregar
  const [counter, setCounter] = useState(0)
  
  //variable para navegacion
  const navigate = useNavigate()
  
  //funcion del boton volver del detalle del item
  const volver = () => {
    navigate(-1)
  }

  //funcion de agregar al carrito
  const {addItem} = useContext(CartContext)
  const onAdd = () => {
    if (counter>0) {
      const newItem = {
        id,
        title,
        image,
        price,
        description,
        counter
      }
      addItem(newItem)
    }
  }

  return (
    <div className='divItemDetail'>
      <h2>{title}</h2>
      <img src={image} alt={title}/>
      <p>$ {price}</p>
      <p>{description}</p>
      <ItemCount stock={stock} counter={counter} setCounter={setCounter} onAdd={onAdd}/>
      <Link to={'/cart'}>
        <button>Finalizar compra</button>
      </Link>
      <button onClick={volver}>Volver</button>
    </div>
  )
}