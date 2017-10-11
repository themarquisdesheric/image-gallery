import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <ul className="Nav-list">
        <li>
          <NavLink 
            exact 
            to="/" 
            activeClassName="selected"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/albums" 
            activeClassName="selected"
          >
            Albums
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}