import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css"
import data from "../../data/productos.json"
import {ItemList} from '../ItemList/ItemList'

export const ItemListContainer = () => {
    const [productos,setProductos] = useState([])
    const pedirProductos = () => {
        return new Promise((resolve,reject) => {
            setTimeout( () => {
                resolve(data)
                }, 2000)
        })
    }

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