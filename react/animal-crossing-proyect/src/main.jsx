import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import Profile from './pages/Profile';
import Recipes from './pages/Recipes';
import Villagers from './pages/Villagers';
import VillagerDetail from './pages/VillagerDetail';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Villagers" element={<Villagers />} />
          <Route path="/Villager/:id" element={<VillagerDetail />} />
          <Route path="/Recipes" element={<Recipes />} />
          <Route path="/*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
