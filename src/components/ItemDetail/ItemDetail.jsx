import React from 'react'
import './ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({prop}) => {
  return (
    <div className='divItemDetail'>
      <h2>{prop.title}</h2>
      <img src={prop.image} alt={prop.title}/>
      <p>$ {prop.price}</p>
      <p>{prop.description}</p>
      <ItemCount stock={prop.stock}/>
    </div>
  )
}
