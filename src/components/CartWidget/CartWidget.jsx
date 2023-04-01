import React from 'react'
import cart from "../../../src/cart.png"
import "./CartWidget.css"

export const CartWidget = () => {
    return (
        <div className='divCart'>
            <img src={cart} alt='logo del carrito' className='logoCarrito'/>
            <h1 className='cantidadCarrito'>4</h1>
        </div>
    )
}
