import React from 'react';
import Header from './Header';
import Counter from './Counter';
import './App.css';

function App() {
  return (
    <div>
      <Header name="Sara" links={["Sobre", "Comprar", "Contato","Login"]}></Header>   
      <Counter count={2}></Counter>
    </div>
    );
}

export default App;
