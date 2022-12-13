import React, {useState} from "react";

function Counter(props) {

    const [count, setCount] = useState(props.count)

    function add() {

        setCount(count + 1);
        console.log("Atualziar")
    }
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={add}>Add</button>
        </div>
    )
}

// class Counter extends React.Component {

//     constructor(props){ //1 metodo do ciclo de vida
//         super(props)
//         this.state = {count: this.props.count}
//         this.add = this.add.bind(this)
//     }

    

//     add() {
//         this.setState({count: this.state.count + 1})
//         this.setState((state) => { return {count: state.count +1}})
//     }

//     shouldComponentUpdate() {
//         return true;
//     }

//     render() { //metodo para atulizar a tela
//         return(
//             <div>
//                 <h1>Counter: {this.state.count}</h1>
//                 <button onClick={this.add}>Add</button>
//             </div>
//         )
//     }
// }

export default Counter;