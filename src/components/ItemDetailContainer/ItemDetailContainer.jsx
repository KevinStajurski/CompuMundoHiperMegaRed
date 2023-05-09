import React, { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { getItem } from '../getItem'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {
  //Variable para almacenar los datos del producto
  const [prop, setProp] = useState({})

  //idParam almacena el ID de la ruta obtenida por el hook useParams
  const idParam = useParams()

  //Obtener datos de un producto según su ID
  useEffect(() => {
    getItem()
      .then((res) => {
        setProp(res.find(prod => prod.id === Number(idParam.id)))
      })
  }, [idParam])

  return (
    <div className='divItemDetailContainer'>
      {prop.id ? <ItemDetail {...prop} /> : <img src="https://i.gifer.com/YCZH.gif" alt="cargando" />}
    </div>
  )
}