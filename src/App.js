import React, {useEffect, useState} from "react";
import Header from './Header';
import Counter from './Counter';
import './App.css';

function App() {

  const [show, setShow] = useState(true)

  let time = 0;

  useEffect(()=>{
    let timer = setInterval(()=>{//funcao para somar no time a cada 1000(1s)
      time++;
      console.log(time)
      if(time > 5){
        clearInterval(timer)//funcao para limpar o time
        setShow(false)
      }
    },1000)
  }, [])

  

  if(show){
    return (
      <div>
        <Header name="Sara" links={["Sobre", "Comprar", "Contato","Login"]}></Header>   
        <Counter count={2}></Counter>
      </div>
      );
  }else {
    return(
      <div>
        Sem contador
      </div>
    )
  }
}

export default App;
