import logo from './logo.svg';
import Header from './Header';
import './App.css';

function App() {
  return (
    <Header name="José" links={["Sobre", "Comprar", "Contato"]}></Header>   
  );
}

export default App;
