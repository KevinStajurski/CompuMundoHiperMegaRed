import React, { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { pedirProductos } from '../pedirProductos'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {
  //variable que almacena los datos del producto
  const [prop, setProp] = useState({})

  //idParam almacena la ruta obtenida por el hook useParams
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