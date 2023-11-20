import React from 'react';
import { Link } from 'react-router-dom';

function AuthBoxLoggedOut() {
  return (
    <nav>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">Register</Link>
    </nav>
  );
}

export default AuthBoxLoggedOut;
