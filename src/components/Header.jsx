import React from 'react';
import AuthBox from './AuthBox.jsx'; // Replace with the correct path to your Auth component

function Header() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>Text Adventure Game For Education</h1>
      <AuthBox />
    </header>
  );
}

export default Header;
