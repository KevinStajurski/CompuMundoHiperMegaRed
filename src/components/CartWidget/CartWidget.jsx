import React, { useContext } from 'react'
import { BiCart } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import "./CartWidget.css"

export const CartWidget = () => {
    const {handleCartQty} = useContext (CartContext)
    return (
        <div className='divCart'>
            <Link to={"/cart"}>
                <BiCart className='cartIcon'/>
            </Link>
            <span className='cantidadCarrito'>{handleCartQty()}</span>
        </div>
    )
}
