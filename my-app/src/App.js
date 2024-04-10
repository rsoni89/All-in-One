import React from 'react';
import Sidebar from './SideBar'; // Adjust the path as necessary
import MainContent from './Content'; // Adjust the path as necessary
import Header from './Header';
import './App.css'; // Assuming you have some CSS styles defined

function App() {
  return (
    <div className="app">
      <Sidebar />
      <MainContent />
      <Header />
    </div>
  );
}

export default App;
