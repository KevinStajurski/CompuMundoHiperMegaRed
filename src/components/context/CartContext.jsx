import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ({ children }) => {

    //Array de carrito
    const [cart, setCart] = useState(init)

    //Local storage
    useEffect (()=>{
        localStorage.setItem('cart',JSON.stringify(cart))
    },[cart])

    //Agrega producto al carrito
    const addToCart = (item) => {
        setCart([...cart, item])
    }

    //Calcula la cantidad de productos en el carrito
    const handleCartQty = () => {
        return cart.reduce((accumulator, currentValue) => accumulator + currentValue.counter, 0)
    }

    //Calcula el precio total del carrito
    const handleTotalPrice = () => {
        return cart.reduce((accumulator, currentValue) => accumulator + currentValue.counter * currentValue.price, 0)
    }

    //Borra producto del carrito segun su id
    const handleRemoveItem = (itemId) => {
        const newCart = cart.filter((prod) => prod.id !== itemId)
        setCart(newCart)
    }

    //Borra todo el carrito
    const clearCart = () => {
        setCart([])
    }
    return (
        <CartContext.Provider value={{addToCart, handleCartQty, handleTotalPrice, handleRemoveItem, cart, clearCart}}>
            { children }
        </CartContext.Provider>
    )
}