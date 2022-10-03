import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <ItemListContainer greeting="¡Bienvenidos a CarArt!" />
    </div>
  );
}

export default App;


