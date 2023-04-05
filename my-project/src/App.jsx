import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar/Navbar'

function App() {
  return (
    <div className="App">
       {/* Header component */}
        <Navbar />
        <Outlet></Outlet>
       {/* Footer component */}
    </div>
  )
}

export default App
