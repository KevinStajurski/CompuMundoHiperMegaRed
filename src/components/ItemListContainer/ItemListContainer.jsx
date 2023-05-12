import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
// import { getItem } from '../getItem'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../firebase/config'
import "./ItemListContainer.css"

export const ItemListContainer = () => {
    //Array para almacenar los productos
    const [items, setItems] = useState([])
    //categoryParams almacena la categoria de la ruta obtenida por el hook useParams
    const categoryParam = useParams()

    //Obtener datos de los productos según su categoria si existe en la ruta o de todos si no existe
    // useEffect(() => {
    //     getItem()
    //         .then((res) => {
    //             if (categoryParam.category) {
    //                 setProductos(res.filter(prod => prod.category === categoryParam.category))
    //             } else {
    //                 setProductos(res)
    //             }
    //         })
    // }, [categoryParam])

    //Obtener datos de firebase
    useEffect(() => {
        const db = getFirestore()
        const products = categoryParam.category
            ? db.collection('productos').where('category', '==', categoryParam.category)
            : db.collection('productos')
        products.get()
            .then((res) => {
                const newItem = res.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                })
                setItems(newItem)
            })
            .catch((error) => console.log(error))
    }, [categoryParam])

    return (
        <div>
            {items ? <ItemList productos={items} /> : <img src="https://i.gifer.com/YCZH.gif" alt="cargando" />}
        </div>
    )
}