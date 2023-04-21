import { useState } from "react"
import "./ItemCount.css"

export const ItemCount = ({stock}) => {
    const [contador, setContador] = useState(0)

    const aumentar = () => {
        if (contador < stock) {
            setContador (contador + 1)
        }
    }
    
    const disminuir = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    return (
        <div className="ItemCount">
        <button onClick={aumentar}>+</button>
        <h2>{contador}</h2>
        <button onClick={disminuir}>-</button>
        <button>Agregar al carrito</button>
        </div>
    )
}