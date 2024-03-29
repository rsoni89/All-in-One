import React from 'react';

function HomePage() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh'
    }}>
      <div style={{ 
        width: '20px', 
        height: '20px', 
        borderRadius: '50%', 
        backgroundColor: 'blue' 
      }}></div>
    </div>
  );
}

export default HomePage;

