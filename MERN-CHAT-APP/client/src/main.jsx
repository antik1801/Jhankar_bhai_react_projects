import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import Router from './routers/router.jsx'
import ChatProvider from './Context/ChatProvider.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
    <ChakraProvider>
      <ChatProvider>
      <Router></Router>
      </ChatProvider>
    </ChakraProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
