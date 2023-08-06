import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './router/router';
import { ChakraProvider } from '@chakra-ui/react'
import ChatProvider from './context/ChatProvider';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChatProvider>
    <ChakraProvider>
     <RouterProvider router={router} />
    </ChakraProvider>
    </ChatProvider>
  </React.StrictMode>,
)
