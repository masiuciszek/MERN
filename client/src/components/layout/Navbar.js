import React from 'react';
import { Link } from 'react-router-dom';
import links from './links';

function Navbar() {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code" /> DevConnector
        </Link>
      </h1>
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            <Link to={link.to}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
