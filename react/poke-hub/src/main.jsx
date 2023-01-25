import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import Pokedex from './pages/Pokedex/Pokedex'
import Home from './pages/Home'
import PokemonDetail from './pages/PokemonDetail'
import NotFound from './pages/NotFound'
import Store from './pages/Store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes basename="/">
        <Route path="/" element={<App />}>
          <Route index element={<Home />}/>
          <Route path ="Pokedex" element = {<Pokedex />}/>
          <Route path ="Pokedex/:id"  element = {<PokemonDetail />}/>
          <Route path = "Store" element = {<Store />} />
          <Route path = "*" element = {<NotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
