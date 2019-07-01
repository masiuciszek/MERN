import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import links from './links';
import { logout } from '../../actions/auth';

function Navbar({ auth: { isAuthenticated, loading }, logout }) {
  const guestLinks = (
    <ul className="navlist">
      {links.map((link, i) => (
        <li key={i}>
          <Link to={link.to}>{link.text}</Link>
        </li>
      ))}
    </ul>
  );

  const authLinks = (
    <ul className="navlist">
      <li>
        <Link to="/dashboard">
          <i className="fa fa-user" />
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <a href="#!" onClick={logout}>
          <i className="fas fa-sign-out-alt"></i>
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code" /> DevConnector
        </Link>
      </h1>
      {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
    </nav>
  );
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
