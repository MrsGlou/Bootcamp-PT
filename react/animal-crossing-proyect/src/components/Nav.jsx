import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import { userContext } from '../context/userContext';

const Nav = () => {
  const { logout } = useContext(userContext);
  if (localStorage.getItem('user')) {
    return (
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/villagers">Villagers</NavLink>
          </li>
          <li>
            <NavLink to="/recipes">Recipes</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            {' '}
            <NavLink to="/login" onClick={() => logout()} className="logout">
              Cerrar Sesion
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Nav;
