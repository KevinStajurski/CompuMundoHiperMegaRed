import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const CheckOut = () => {
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