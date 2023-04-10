import './App.css';
import { CartWidget } from './components/CartWidget/CartWidget';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar>
        <CartWidget/>
      </NavBar>
      <ItemListContainer/>
    </div>
  );
}

export default App;
