import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../firebase/config'
import "./ItemListContainer.css"

export const ItemListContainer = () => {

    //Array para almacenar los productos
    const [items, setItems] = useState([])

    //categoryParams almacena la categoria de la ruta obtenida por el hook useParams
    const categoryParam = useParams()

    //Obtener datos de firebase
    useEffect(() => {
        const db = getFirestore()
        const products = categoryParam.category ? db.collection('productos').where('category', '==', categoryParam.category) : db.collection('productos')
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
            {items ? <ItemList items={items} /> : <img src="https://i.gifer.com/YCZH.gif" alt="cargando" />}
        </div>
    )
}