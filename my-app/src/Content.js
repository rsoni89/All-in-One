import React from 'react';
import './Content.css'; // Your CSS file for Content

function Content() {
  return (
    <div className="content">
      <div className="section" id="section1">
        <h2>Bearcat Tools</h2>
        <p>UC Canvas is </p>
      </div>
      <div className="section" id="section2">
        <h2>Section 2</h2>
        <p>This is the content for Section 2.</p>
      </div>
      <div className="section" id="section3">
        <h2>Section 3</h2>
        <p>This is the content for Section 3.</p>
      </div>
    </div>
  );
}

export default Content;
