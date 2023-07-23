import { Route } from 'react-router-dom'
import './App.css'
import { Button, ButtonGroup } from '@chakra-ui/react'
import HomePage from './Pages/HomePage'
import ChatPage from './Pages/ChatPage'


function App() {

  return (
    <div className='App'>
     <Route path='/' component={HomePage} exact></Route> 
     <Route path='/chats' component={ChatPage}></Route> 
    </div>
  )
}

export default App
