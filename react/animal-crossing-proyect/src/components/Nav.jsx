import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import { userContext } from '../context/userContext';

const Nav = () => {
  const { logout } = useContext(userContext);
  if (localStorage.getItem('token')) {
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
            <button className="logout">
              <NavLink to="/" onClick={() => logout()} className="logout">
                <img
                  className="iconLogout"
                  src="https://res.cloudinary.com/dq186ej4c/image/upload/v1678462138/logout_FILL0_wght400_GRAD0_opsz48_dpfnju.png"
                  alt=""
                />
              </NavLink>
            </button>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Nav;
