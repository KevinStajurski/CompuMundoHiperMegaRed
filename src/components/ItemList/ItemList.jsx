import React from 'react'
import { Item } from '../Item/Item'
import "./ItemList.css"

export const ItemList = ({ items }) => {
  return (
    <div className='DivProd'>
      {
        items.map((item) => {
          return (
            <Item key={item.id} item={item} />
          )
        })
      }
    </div>
  )
}
