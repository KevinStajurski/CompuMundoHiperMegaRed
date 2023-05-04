import React, { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { pedirProductos } from '../pedirProductos'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {
  
  const [prop, setProp] = useState({})
  const idParam = useParams()

  useEffect ( () => {
    pedirProductos()
    .then( (res) => {
      setProp(res.find(prod => prod.id === Number(idParam.id)))
    })
  }, [idParam])

  return (
    <div className='divItemDetailContainer'>
      {prop.id ? <ItemDetail {...prop}/> : <img src="https://i.gifer.com/YCZH.gif" alt="cargando"/>}
    </div>
  )
}