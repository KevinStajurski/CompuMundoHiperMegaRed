import React from 'react'
import logo from '../../logo.png'
import "./NavBar.css"
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
export const NavBar = () => {
    return (
        <div className='NavBar'>
            <Link to={'/'}>
                <img src={logo} alt="logo de la tienda" className='Logo' />
            </Link>
            <NavLink to={'/'} activeClassName="active" className="inactive">Home</NavLink>
            <NavLink to={'/category/celulares'} activeClassName="active" className="inactive">Celulares</NavLink>
            <NavLink to={'/category/aires'} activeClassName="active" className="inactive">Aires</NavLink>
            <NavLink to={'/category/televisores'} activeClassName="active" className="inactive">Televisores</NavLink>
            <CartWidget/>
        </div>
    )
}
