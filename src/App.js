import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        {/* Acá va mi ItemListContainer.js */}
      <ItemListContainer greeting="Saludos a todos!"/>
      </header>
    </div>
  );
}

export default App;
