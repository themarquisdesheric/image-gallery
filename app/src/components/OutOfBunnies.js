import React from 'react';

export default function OutOfBunnies() {
  return (
    <h1>
      <span className="out-of-bunnies">
        You're all out of bunnies <br/>
          <span role="img" aria-label="sad-face"> 🙁</span><br/>
      </span> 
      Why don't you add some more?
    </h1>
  );
}