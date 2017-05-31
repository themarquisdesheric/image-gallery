import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <ul className="Nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/albums">Albums</Link></li>
      </ul>
    </nav>
  );
}