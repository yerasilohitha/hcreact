import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)




  // let counter=15
  const addvalue=()=>{
    if (counter<20){
      counter=counter+1;
      setCounter(counter)
      console.log("value added:",counter)
    }
  }

  const decreasevalue=()=>{
    if (counter>0){
      setCounter(counter-1)
      console.log("value decreased :",counter)
    }
  }

  return (
    <>
      <h1>welcome to the react project</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addvalue}>Add value to {counter}</button>
      <br></br>
      <button onClick={decreasevalue}>Decrease value to {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
