import React from 'react'
import { Item } from '../Item/Item'
import "./ItemList.css"

export const ItemList = ({ productos }) => {
  return (
    <div className='DivProd'>
      {
        productos.map((producto) => {
          return (
            <Item key={producto.id} producto={producto} />
          )
        })
      }
    </div>
  )
}
