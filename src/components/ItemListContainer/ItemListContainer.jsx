import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css"
import {ItemList} from '../ItemList/ItemList'
import {pedirProductos} from '../pedirProductos'

export const ItemListContainer = () => {
    const [productos,setProductos] = useState([])

    useEffect(() => {
        pedirProductos ()
        .then((res) => {
            setProductos(res)
        })
    },[])

    return (
        <div>
            {productos.length === 0 ? <img src="https://i.gifer.com/YCZH.gif" alt="cargando"/> : <ItemList productos={productos}/>}
        </div>
    )
}