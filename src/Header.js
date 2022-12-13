import React from "react";
import "./App";
import Menu from "./Menu";

function Header(props) {//classes criadas iniciamos com letras maiusculas para poder diferenciar no jsx
    return(
        <header className='header'>
            <h1>{props.name}</h1>
            <Menu links={props.links}></Menu>
            
        </header>
    )
}

export default Header