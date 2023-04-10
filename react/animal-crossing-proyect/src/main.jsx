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
import { ContextProvider } from './context/userContext';
import Protected from './components/Protected';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <BrowserRouter basename="/">
        <ContextProvider>
          <Routes>
            <Route path="/" element={<App />}>
              <Route
                index
                element={
                  <Protected>
                    <Home />
                  </Protected>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route
                path="/profile"
                element={
                  <Protected>
                    <Profile />
                  </Protected>
                }
              />
              <Route
                path="/profile/favorite"
                element={
                  <Protected>
                    <Favorites />
                  </Protected>
                }
              />
              <Route
                path="/villagers"
                element={
                  <Protected>
                    <Villagers />
                  </Protected>
                }
              />
              <Route
                path="/villager/:id"
                element={
                  <Protected>
                    <VillagerDetail />
                  </Protected>
                }
              />
              <Route
                path="/recipes"
                element={
                  <Protected>
                    <Recipes />
                  </Protected>
                }
              />
              <Route path="/*" element={<Page404 />} />
            </Route>
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </ThemeContextProvider>
  </React.StrictMode>,
);
