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
      <ItemListContainer greeting="Bienvenido a CompuMundoHiperMegaRed, esta industria avanza tan rápido que es dificil saber!"/>
    </div>
  );
}

export default App;
