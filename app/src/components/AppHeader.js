import React from 'react';
import Nav from './Nav';

export default function AppHeader() {
  return (
    <div>
      <h1 className="App-header">
        <span
          role="img" 
          aria-label="bunny">
          🐰 
        </span>
          Image Gallery
        <span
          role="img"
          aria-label="bunny"> 
          🐰
        </span>
      </h1>
      <Nav />
    </div>
  );
}