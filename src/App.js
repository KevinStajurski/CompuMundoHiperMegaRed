import { CartWidget } from './components/CartWidget/CartWidget';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Cart } from './components/Cart/Cart'
import { CheckOut } from './components/Checkout/CheckOut';
import { NavBar } from './components/NavBar/NavBar';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { CartContext } from './components/context/CartContext';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([])
  
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
    const newCart = cart.filter ((prod) => prod.id !== itemId)
    setCart(newCart)
  }

  return (
    <CartContext.Provider value={{addToCart, handleCartQty, handleTotalPrice, handleRemoveItem, cart}}>
      <BrowserRouter>
          <NavBar>
            <CartWidget/>
          </NavBar>
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='category/:category' element={<ItemListContainer/>}/>
          <Route exact path='item/:id' element={<ItemDetailContainer/>}/>
          <Route exact path='cart' element={<Cart/>}/>
          <Route exact path='checkout' element={<CheckOut/>}/>
          <Route path='*' element={<Navigate to = '/'/>}/>
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;