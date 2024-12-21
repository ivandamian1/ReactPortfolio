import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">
          <Link to="/" className="header-link">
            Ivan D. Adrover  Rivera
          </Link>
        </h1>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                About Me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/portfolio"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/resume"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
