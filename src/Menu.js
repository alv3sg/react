import React from "react";
import App from "./App";
import Header from "./Header";

function Menu(props){//a funcao map vai mapear todos os itens do array links e criar um li com cada item desse array
    const listLink = props.links.map((link, index)=><li key={index}>{link}</li>)
    return(
    <ul className='menu'>
        {listLink}
    </ul>)
}
export default Menu