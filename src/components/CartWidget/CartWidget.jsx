import React from 'react'
import { BiCart } from 'react-icons/bi';
import "./CartWidget.css"

export const CartWidget = () => {
    return (
        <div className='divCart'>
            <BiCart className='cartIcon'/>
            <h1 className='cantidadCarrito'>4</h1>
        </div>
    )
}
