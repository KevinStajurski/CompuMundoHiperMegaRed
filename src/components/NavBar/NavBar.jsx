import React from 'react'
import logo from '../../logo.png'
import "./NavBar.css"
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
export const NavBar = () => {
    return (
        <div className='NavBar'>
            <Link to={'/'}>
                <img src={logo} alt="logo de la tienda" className='Logo' />
            </Link>
            <Link to={'/'}>Mouse</Link>
            <Link to={'/'}>Teclados</Link>
            <Link to={'/'}>Auriculares</Link>
            <CartWidget/>
        </div>
    )
}
