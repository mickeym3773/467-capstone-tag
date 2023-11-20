import React from 'react';
import { useState, useEffect } from 'react';
import AuthBoxLoggedOut from './AuthBoxLoggedOut.jsx';
import AuthBoxLoggedIn from './AuthBoxLoggedIn.jsx';

function Header() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  useEffect(() => {
    // Refresh the component whenever the localStorage user data changes.
    const handleStorageChange = () => {
      setUser(JSON.parse(localStorage.getItem('user')))
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>Text Adventure Game For Education</h1>
      {user && user.email ? <AuthBoxLoggedIn user={user} setUser={setUser} /> : <AuthBoxLoggedOut />} 
    </header>
  );
}

export default Header;
