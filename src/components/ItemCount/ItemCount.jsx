import "./ItemCount.css"

export const ItemCount = ({stock, counter, setCounter, onAdd}) => {

    const aumentar = () => {
        if (counter < stock) {
            setCounter (counter + 1)
        }
    }
    
    const disminuir = () => {
        if (counter > 0) {
            setCounter (counter - 1)
        }
    }

    return (
        <div className="ItemCount">
        <button onClick={disminuir}>-</button>
        <h2>{counter}</h2>
        <button onClick={aumentar}>+</button>
        <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}