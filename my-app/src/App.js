// App.js

import React from 'react';
import Header from './Header';
import './App.css';

function App() {
  return (
    <div className="appContainer">
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
}

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#setup">Setup</a></li>
        <li><a href="#examples">Examples</a></li>
        <li><a href="#1">1</a></li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
}

function Content() {
  const introContent = require('./introContent.txt').default;
  return (
    <div className="content">
      <section id="introduction">
        <h2>Introduction</h2>
        <p>{introContent}</p>
      </section>
      <section id="setup">
        <h2>Setup</h2>
        <p>Content for the Setup section goes here.</p>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <p>Content for the Examples section goes here.</p>
      </section>
      <section id="1">
        <h2>1</h2>
        <p>Content for the Examples section goes here.</p>
      </section>
      {/* Add more sections as needed */}
    </div>
  );
}

export default App;