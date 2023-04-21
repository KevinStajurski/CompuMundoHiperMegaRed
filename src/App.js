import { CartWidget } from './components/CartWidget/CartWidget';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
          <NavBar>
            <CartWidget/>
          </NavBar>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='category/:category' element={<ItemListContainer/>}/>
          <Route path='item/:id' element={<ItemDetailContainer/>}/>
          {/* <Route path='cart' element={<Cart/>}/>
          <Route path='checkout' element={<CheckOut/>}/> */}
          <Route path='*' element={<Navigate to = '/'/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;