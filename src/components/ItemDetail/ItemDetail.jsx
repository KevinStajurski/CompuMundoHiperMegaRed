import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'
import { CartContext } from '../context/CartContext'
import Swal from 'sweetalert2'
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

  //Funciones traidas del contexto. addItem: agrega el producto al carrito - isInCart: devuelve true si el producto ya esta en el carrito
  const { addItem, isInCart } = useContext(CartContext)

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
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto agregado',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      Swal.fire('Producto sin stock!')
    }
  }

  return (
    <>
      {!title ? <h1>El producto no existe!</h1> :
        <div className='divItemDetail'>
          <h2>{title}</h2>
          <img src={image} alt={title} />
          <p>Precio: $ {price}</p>
          <p>Descripcion: {description}</p>
          <p>ID: {id}</p>
          <p>Stock: {stock}</p>
          {isInCart(id) ? <>
            <p>El producto ya se encuentra en el carrito</p>
            <Link to={'/cart'}>
              <button>Terminar mi compra</button>
            </Link>
          </> :
            <ItemCount stock={stock} onAdd={onAdd} counter={counter} setCounter={setCounter} />
          }
          <button onClick={back}>Volver</button>
        </div>
      }
    </>
  )
}