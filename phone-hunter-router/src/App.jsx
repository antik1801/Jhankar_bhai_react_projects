import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
// Starting projects
function App() {
  

  return (
    <div className="App ">
      {/* Header template */}
      <div className=''>
      <Header></Header>
      </div>
      {/* Outlet */}
      <Outlet></Outlet>
      {/* Footer */}
    </div>
  )
}

export default App
