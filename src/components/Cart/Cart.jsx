import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import './Cart.css'

export const Cart = () => {
  
  const { totalPrice, removeItem, cart, clear } = useContext(CartContext)
  
  return (
    <div>
      {cart.length === 0 ?
        <>
          <h1>Carrito vacio</h1>
          <Link to={'/'}>
            <button>Ver Productos</button>
          </Link>
        </> :
        <>
          <div className='div'>
            <h1>Resumen de compras</h1>
            {cart.map((prod) => (
              <div className='div'>
                <p>Nombre: {prod.title}</p>
                <p>Cantidad: {prod.counter}</p>
                <img src={prod.image} alt={prod.title} className='img' />
                <button onClick={() => removeItem(prod.id)}>Eliminar</button>
                <hr />
              </div>
            ))}
            <button onClick={clear}>Vaciar carrito</button>
            <Link to={'/checkout'}>
              <button>Procesar compra</button>
            </Link>
            <strong>Total: $ {totalPrice()}</strong>
          </div>
        </>}
    </div>
  )
}