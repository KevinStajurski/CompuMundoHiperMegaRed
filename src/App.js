import { CartWidget } from './components/CartWidget/CartWidget';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar>
        <CartWidget/>
      </NavBar>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;