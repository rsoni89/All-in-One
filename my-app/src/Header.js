// Header.js

import React from 'react';

const Header = () => {
    return (
      <header className="App-css" style={{ textAlign: 'center', backgroundColor: 'black', color: 'white' }}>
        <div> {/* Wrap title and nav */}
          <h1>UC All in One</h1>
          <nav>
            <a href="/" className="nav-link">Home</a>
            <a href="/about" className="nav-link">About</a>
            <a href="/contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>
    );
  };
  
  

export default Header;
