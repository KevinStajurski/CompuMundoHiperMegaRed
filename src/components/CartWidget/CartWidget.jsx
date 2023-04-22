import React from 'react'
import { BiCart } from 'react-icons/bi';
import "./CartWidget.css"
import { Link } from 'react-router-dom';

export const CartWidget = () => {
    return (
        <div className='divCart'>
            <Link to={"/cart"}>
                <BiCart className='cartIcon'/>
            </Link>
            <h1 className='cantidadCarrito'>4</h1>
        </div>
    )
}
