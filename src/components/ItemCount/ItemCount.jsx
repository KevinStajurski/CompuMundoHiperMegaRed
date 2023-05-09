import "./ItemCount.css"

export const ItemCount = ({ stock, onAdd, counter, setCounter }) => {

    //Funcion de incrementar el contador
    const increase = () => {
        counter < stock && setCounter(counter + 1)
    }

    //Funcion de decrementar el contador
    const decrease = () => {
        counter > 1 && setCounter(counter - 1)
    }

    return (
        <div className="ItemCount">
            <button onClick={decrease}>-</button>
            <h2>{counter}</h2>
            <button onClick={increase}>+</button>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}