import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const changeCount =()=> {
    setCount(count + 1)
  }

  const resetCount =() => {
    setCount(0)
  }

  return (
    <>
      <h1>Hi George 👋👌</h1>
      <button onClick={changeCount}>Press Me</button>
      <button onClick={resetCount}>Reset</button>
      <div>
        <h2>The count is: {count}</h2>
      </div>
    </>
  )
}

export default App
