import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { getFirestore } from '../../firebase/config'
import firebase from 'firebase'
import 'firebase/firestore'
import Swal from 'sweetalert2'

export const CheckOut = () => {
  const { totalPrice, clear, cart } = useContext(CartContext)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [lastname, setLastname] = useState("")
  const [phone, setPhone] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Email: ", email)
    console.log("Nombre: ", name)
    console.log("Apellido: ", lastname)
    console.log("Teléfono: ", phone)
    const order = {
      buyer: {
        email,
        name,
        lastname,
        phone
      },
      items: cart,
      total: totalPrice(),
      data: firebase.firestore.Timestamp.fromDate(new Date())
    }
    console.log(order)
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