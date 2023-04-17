import React, { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { pedirProductos } from '../pedirProductos'
import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {
  
  const [prop, setProp] = useState({})

  useEffect ( () => {
    pedirProductos()
    .then( (res) => {
      setProp(res[0])
    })
  }, [])

  return (
    <div className='divItemDetailContainer'>
      <hr />
      <h2>ItemDetailContainer</h2>
      <ItemDetail prop={prop}/>
    </div>
  )
}
