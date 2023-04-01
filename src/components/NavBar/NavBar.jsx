import React from 'react'
import logo from '../../logo.png'
import "./NavBar.css"
import { CartWidget } from '../CartWidget/CartWidget'
export const NavBar = () => {
    return (
        <div className='NavBar'>
            <img src={logo} alt="logo de la tienda" className='Logo' />
            <a href='google.com'>Mouse</a>
            <a href='google.com'>Teclados</a>
            <a href='google.com'>Auriculares</a>
            <CartWidget/>
        </div>
    )
}
