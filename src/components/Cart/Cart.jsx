import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const Cart = () => {
  const { handleTotalPrice, handleRemoveItem, cart } = useContext(CartContext)
  return (
    <div>
      <h1>Resumen de compras</h1>
      {cart.map((prod) => (
        <div>
          <p>Nombre: {prod.title}</p>
          <p>Cantidad: {prod.counter}</p>
          <button onClick={() => handleRemoveItem(prod.id)}>Eliminar</button>
        </div>
      ))}
      <strong>Total: $ {handleTotalPrice()}</strong>
    </div>
  )
}