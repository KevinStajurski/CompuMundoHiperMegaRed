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
            <Link to={'/category/celulares'}>Celulares</Link>
            <Link to={'/category/aires'}>Aires</Link>
            <Link to={'/category/televisores'}>Televisores</Link>
            <CartWidget/>
        </div>
    )
}
