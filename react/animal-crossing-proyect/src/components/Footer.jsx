import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <h4>Made with ❤ by Andrea</h4>
      <ul>
        <li>
          <Link to={`https://github.com/MrsGlou`}>GitHub</Link>
        </li>
        <li>
          <Link to={`https://www.linkedin.com/in/andrea-p%C3%A9rez-perez-4a7a44144/`}>
            LinkedIn
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
