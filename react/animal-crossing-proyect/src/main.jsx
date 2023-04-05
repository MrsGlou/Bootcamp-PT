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
import Favorites from './pages/Favorites';
import { ThemeContextProvider } from './context/themeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/favorite" element={<Favorites />} />
          <Route path="/villagers" element={<Villagers />} />
          <Route path="/villager/:id" element={<VillagerDetail />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeContextProvider>
  </React.StrictMode>,
);
