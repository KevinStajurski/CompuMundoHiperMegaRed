import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { getFirestore } from '../../firebase/config'
import firebase from 'firebase'
import 'firebase/firestore'
import Swal from 'sweetalert2'

export const CheckOut = () => {

  //Funciones traidas del contexto. totalPrice: calcula el precio total del carrito - clear: limpia el carrito - cart: arreglo del carrito
  const { totalPrice, clear, cart } = useContext(CartContext)
  
  //Variables para almacenar datos del usuario
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [lastname, setLastname] = useState("")
  const [phone, setPhone] = useState("")

  //Submit del formulario de datos del comprador
  const handleSubmit = (e) => {
    e.preventDefault()
    const order = {
      buyer: {
        email,
        name,
        lastname,
        phone
      },
      items: cart,
      total: totalPrice(),
      date: firebase.firestore.Timestamp.fromDate(new Date())
    }

    //Funcion para enviar la orden a firebase
    const db = getFirestore()
    const orders = db.collection('ordenes')
    orders.add(order)
      .then((res) => {
        Swal.fire({
          icon: 'success',
          title: 'Compra realizada con exito!',
          text: `Guarde su número de compra: ${res.id}`,
          willClose: () => {
            clear()
          }
        })
      })

    //Funcion para actualizar cantidades en firebase
    cart.forEach(item => {
      const docRef = db.collection('productos').doc(item.id)
      docRef.get()
        .then((doc) => {
          docRef.update({
            stock: doc.data().stock - item.counter
          })
        })
    })
  }

  return (
    <div>
      <h3>Procesar compra</h3>
      <hr />
      <form onSubmit={handleSubmit} className='container mt-3'>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div>
          <label htmlFor="name">Nombre</label>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
        </div>
        <div>
          <label htmlFor="lastname">Apellido</label>
          <input type="text" onChange={(e) => setLastname(e.target.value)} value={lastname} />
        </div>
        <div>
          <label htmlFor="phone">Teléfono</label>
          <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} />
        </div>
        <button type='submit'>Finalizar compra</button>
        <Link to={'/cart'}>
          <button>Volver al carrito</button>
        </Link>
      </form>
    </div>
  )
}