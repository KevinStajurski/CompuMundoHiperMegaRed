import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css"
import {ItemList} from '../ItemList/ItemList'
import {pedirProductos} from '../pedirProductos'
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {
    const [productos,setProductos] = useState([])
    const categoryParam = useParams ()

    useEffect(() => {
        pedirProductos ()
        .then((res) => {
            if (categoryParam.category) {
                setProductos (res.filter (prod => prod.category === categoryParam.category))
            } else {
                setProductos(res)
            }
        })
    },[categoryParam])

    return (
        <div>
            {productos.length === 0 ? <img src="https://i.gifer.com/YCZH.gif" alt="cargando"/> : <ItemList productos={productos}/>}
        </div>
    )
}