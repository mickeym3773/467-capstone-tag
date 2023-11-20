import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import splash_img from '../img/splash_img.png'
import Header from '../components/Header';

function Home() {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleMakeGamesClick = (e) => {
    if (user && user.email) {
      navigate('/make-games');
    } else {
      e.preventDefault();
      alert("You must be logged in to Make Games.");
    }
  }

  return (
    <div className="home-container">
      <Header />

      <div className="home-splash-container">
        <img src={splash_img} alt="Splash" className="home-splash-img" />
      </div>

      <div className="home-select-container">
        <h1>Choose Your Adventure!</h1>
        <img src ="../img/makegames1.jpeg" alt="Make Games" />
        <a href="/make-games" onClick={handleMakeGamesClick}>Make Games</a>
        <br>
        </br>
        <Link to="/scroll">Play Games</Link>
      </div>

      <footer>
        (footer content here)
      </footer>
    </div>
  );
}

export default Home;
