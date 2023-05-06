import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

export const Cart = () => {
  const { handleTotalPrice, handleRemoveItem, cart, clearCart } = useContext(CartContext)
  return (
    <div>
      {cart.length === 0 ?
        <>
          <h1>Carrito vacio</h1>
          <Link to={'/'}>Ver Productos</Link>
        </> :
        <>
          <div>
            <h1>Resumen de compras</h1>
            {cart.map((prod) => (
              <div>
                <p>Nombre: {prod.title}</p>
                <p>Cantidad: {prod.counter}</p>
                <button onClick={() => handleRemoveItem(prod.id)}>Eliminar</button>
              </div>
            ))}
            <button onClick={clearCart}>Vaciar carrito</button>
            <strong>Total: $ {handleTotalPrice()}</strong>
          </div>
        </>}
    </div>
  )
}