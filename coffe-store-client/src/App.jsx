import './App.css'
import { useEffect, useState } from 'react'
import CoffeeCart from './components/CoffeeCart'

function App() {
  const [render,setRender] = useState(false)
  const [coffees, setCoffees] = useState([])
  const handleRender = () =>{
    setRender(!render)
  }

  useEffect(()=>{
    fetch('http://localhost:5000/coffee')
    .then(res => res.json())
    .then(data => {
      setCoffees(data)
    })
  },[render])
  return (
    <div className='m-20'>
      <h1 className='text-6xl text-center text-purple-600'>Total Coffees: {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4'> 
      {
        coffees.map(coffee => <CoffeeCart key={coffee._id} coffee={coffee} handleRender={handleRender}></CoffeeCart>)
      }
      </div>
    </div>
  )
}

export default App
