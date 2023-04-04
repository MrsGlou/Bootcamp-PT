import React from 'react';
import './Header.css';
import Nav from './Nav';

const Header = () => {
  return (
    <div className="header-layout">
      <img
        className="header-img"
        src="../../public/Animal_Crossing_Logo.png"
        alt="logo"
      />
      <button className="theme-button">Boton</button>
      <Nav />
    </div>
  );
};

export default Header;
