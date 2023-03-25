import { useState } from 'react'
import './App.css'
import Cosmetics from './components/Cosmetics/Cosmetics'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Cosmetics></Cosmetics>
    </div>
  )
}

export default App
