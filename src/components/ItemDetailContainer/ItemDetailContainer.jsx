import React, { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { getFirestore } from '../../firebase/config'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {
  
  //Variable para almacenar los datos del producto
  const [prop, setProp] = useState({})

  //idParam almacena el ID de la ruta obtenida por el hook useParams
  const idParam = useParams()

  //Obtener los datos desde firestore
  useEffect(() => {
    const db = getFirestore()
    const products = db.collection('productos')
    const item = products.doc(idParam.id)
    item.get()
      .then((res) => {
        setProp({
          id: res.id, ...res.data()
        })
      })
  }, [idParam])

  return (
    <div className='divItemDetailContainer'>
      {prop.id ? <ItemDetail {...prop} /> : <img src="https://i.gifer.com/YCZH.gif" alt="cargando" />}
    </div>
  )
}