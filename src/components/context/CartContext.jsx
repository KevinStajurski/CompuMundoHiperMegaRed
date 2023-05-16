import { createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('cart')) || []

export const CartContextProvider = ({ children }) => {

    //Array de carrito
    const [cart, setCart] = useState(init)

    //Local storage
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    //Agrega producto al carrito
    const addItem = (item) => {
        setCart([...cart, item])
    }

    //Calcula la cantidad de productos en el carrito
    const calcItemsQty = () => {
        return cart.reduce((accumulator, currentValue) => accumulator + currentValue.counter, 0)
    }

    //Calcula el precio total del carrito
    const totalPrice = () => {
        return cart.reduce((accumulator, currentValue) => accumulator + currentValue.counter * currentValue.price, 0)
    }

    //Borra producto del carrito segun su id
    const removeItem = (itemId) => {
        const newCart = cart.filter((prod) => prod.id !== itemId)
        setCart(newCart)
    }

    //Borra todo el carrito
    const clear = (res) => {
        res.length > 0
            ?
            setCart([])
            :
            Swal.fire({
                title: 'Desea vaciar el carrito?',
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: 'Si',
                denyButtonText: `No`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Swal.fire('Carrito vaciado', '', 'success')
                    setCart([])
                }
            })
    }

    //Consulta si el producto a agregar ya se encuentra en el carrito
    const isInCart = (id) => {
        return (
            cart.some(item => item.id === id)
        )
    }

    return (
        <CartContext.Provider value={{ addItem, calcItemsQty, totalPrice, removeItem, cart, clear, isInCart }}>
            {children}
        </CartContext.Provider>
    )
}