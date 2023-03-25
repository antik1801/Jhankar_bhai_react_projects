import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Device from './components/Device/Device'
import Watch from './components/Watch/Watch'
import Knob from './components/knob/Knob'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Knob steps="452"></Knob>
     <Device name="Iphone" price="175000"></Device>
     <Device name="Samsung" price="180000"></Device>
     <Watch></Watch>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

    </div>
  )
}

export default App
