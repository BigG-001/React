import React,{useState} from "react";
import './App.css';
import Profile from "./Component/profile";
import Cities from "./Component/list";
import './Component/list.css'
import SignUpForm from'./Component/form';

function App(){
    // initialize ths state counter 0

    const [count, setCount] = useState(0);
    // increment
    const increment = () => setCount(prevCount => prevCount + 1);
    // decrement
    const decrement = () => {
        if (count > 0){
          setCount(prevCount => prevCount - 1);
        }
      }
     const reset = () => setCount(0);  
      // Used when not sure abt the variable to name
      // function SayHello(props){
      //   return(
      //      <h1>Hello {props.greeting}</h1>
      //   )
      // }
      
       function SayHello(props){
        return(
           <h1>Hello {props.greeting}</h1>
        )
      }
      
      const profile = {
        name: "Victor",
        age: 25
      }
      profile.name

    return(
      <div className = "container">
          <h1>React Counter App</h1>
          <div className="counter">The current count is: {count} </div>
          <div>
            <SayHello greeting="hola"/>
            <SayHello greeting="Bonjour"/>
            <SayHello greeting="Good day"/>
          </div>
          <div className="button">
            <button className="increment" onClick={increment}>Increment</button>
            <button className="decrement" onClick={decrement}>Decrement</button>
            <button className="reset" onClick={reset}>Reset</button>
          </div>
          <Profile/>
          <Cities/>
        
          <SignUpForm/>
      </div> 

    )
}

export default App;



// export default is used when a file has one main function a user want to export.

//// Button.jsx
// function Button() {
//   return <button>Click me</button>;
// }
// can change name to any thing you want to call
//import MyButton from "./Button";
// export default Button;

// With a named export, the exported functions or variable has a specific name.

// math.js
// export const add = (a, b) => a + b;
// export const subtract = (a, b) => a - b;

// When importing, the exported name must be used :
// It make use of curly bracies

// import { add, subtract } from "./math";

