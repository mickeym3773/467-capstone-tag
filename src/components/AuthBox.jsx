import React from 'react';
import { Link } from 'react-router-dom';

function AuthBox() {
  return (
    <nav>
      <Link to="/loginhome">Login Home</Link>
      <br />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">Sign Up</Link>
    </nav>
  );
}

export default AuthBox;
