import { CartWidget } from './components/CartWidget/CartWidget';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Cart } from './components/Cart/Cart'
import { CheckOut } from './components/Checkout/CheckOut';
import { NavBar } from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartContextProvider } from './components/context/CartContext';

function App() {
  return (
    <CartContextProvider>
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
    </CartContextProvider>
  );
}

export default App;