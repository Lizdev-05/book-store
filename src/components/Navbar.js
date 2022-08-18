import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul className="nav-list">
      <li>
        <NavLink to="/" className={(navLink) => (navLink.isActive ? 'active' : 'none')}>
          BOOKS
        </NavLink>
      </li>
      <li>
        <NavLink to="/categories" className={(navLink) => (navLink.isActive ? 'active' : 'none')}>
          CATEGORY
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
