import { StrictMode } from 'react'
import React from 'react'
import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { Authprovider } from './context/AuthProvider.jsx'
import { SocketProvider } from './context/SocketContext.jsx'

axios.defaults.baseURL = "https://chap-app-backend-flpx.onrender.com";  // your backend base URL
axios.defaults.withCredentials = true; //  enable cookies globally


createRoot(document.getElementById('root')).render(
<BrowserRouter>
   <Authprovider>
    <SocketProvider>
       <App />
    </SocketProvider>
    </Authprovider>
    <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
)
