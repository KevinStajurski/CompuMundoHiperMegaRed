import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { getItem } from '../getItem'
import { useParams } from 'react-router-dom'
import "./ItemListContainer.css"

export const ItemListContainer = () => {
    //Array para almacenar los productos
    const [productos, setProductos] = useState([])
    //categoryParams almacena la categoria de la ruta obtenida por el hook useParams
    const categoryParam = useParams()

    //Obtener datos de los productos según su categoria si existe en la ruta o de todos si no existe
    useEffect(() => {
        getItem()
            .then((res) => {
                if (categoryParam.category) {
                    setProductos(res.filter(prod => prod.category === categoryParam.category))
                } else {
                    setProductos(res)
                }
            })
    }, [categoryParam])

    return (
        <div>
            {productos.length === 0 ? <img src="https://i.gifer.com/YCZH.gif" alt="cargando" /> : <ItemList productos={productos} />}
        </div>
    )
}