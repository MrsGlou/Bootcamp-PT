import React, { useContext } from 'react';
import './Layout.css';
import { ThemeContext } from '../context/themeContext';

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return <div className={`main-layout color-${theme}`}>{children}</div>;
};

export default Layout;
