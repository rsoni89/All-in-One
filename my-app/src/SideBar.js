import React from 'react';
import './SideBar.css'; // Assuming you have a separate CSS file for Sidebar

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="#section1">Section 1</a></li>
        <li><a href="#section2">Section 2</a></li>
        <li><a href="#section3">Section 3</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
