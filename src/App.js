import logo from './logo.svg';
import Header from './Header';
import Menu from './Menu';
import './App.css';

function App() {
  return (
    <Header name="Sara" links={["Sobre", "Comprar", "Contato","Login"]}></Header>   
  );
}

export default App;
