import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import './Header.css';
import Nav from './Nav';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div className="header-layout">
        <img
          className="header-img"
          src="../../public/Animal_Crossing_Logo.png"
          alt="logo"
        />
        <button className="theme-button" onClick={toggleTheme}>
          {theme === 'dark' ? '💚' : '💜'}
        </button>
      </div>
      <Nav />
    </>
  );
};

export default Header;
