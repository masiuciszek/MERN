import React from 'react';
import { Link } from 'react-router-dom';
import links from './links';

const Footer = () => {
  let a;
  return (
    <footer className="bg-dark footer">
      <Link to="/" className="footer-title">
        <i className="fas fa-code" /> DevConnector
      </Link>
      <ul className="footer-list">
        {links.map((link, i) => (
          <li key={i}>
            <Link to={link.to}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
