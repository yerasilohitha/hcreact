import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myobj={
        username:"lohitha",
        age:"20"
    }
    let newarr=[1,2,3,4,5]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="yerasi lohitha" btntext="click me"/>
      <Card username="yerasi surya prathap reddy" btntext="visit me"/>
      
    </>
  )
}

export default App
