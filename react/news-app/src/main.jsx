import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import { ContexProvider } from './context/userContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <ContexProvider>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
      </ContexProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
