import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css"
import data from "../../data/productos.json"
import ItemList from '../../ItemList/ItemList'

export const ItemListContainer = () => {
    const [productos,setProductos] = useState([])
    const pedirProductos = () => {
        return new Promise((resolve,reject) => {
            resolve(data)
        })
    }

    useEffect(() => {
        pedirProductos ()
        .then((res) => {
            setProductos(res)
        })
    },[])

    return (
        <ItemList productos={productos}/>
    )
}