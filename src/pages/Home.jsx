import React from 'react';
import { Link } from 'react-router-dom';
import splash_img from '../img/splash_img.png'
import Header from '../components/Header';

function Home() {
  return (
    <div className="home-container">
      <Header />

      <div className="home-splash-container">
        <img src={splash_img} alt="Splash" className="home-splash-img" />
      </div>

      <div className="home-select-container">
        <h1>Choose Your Adventure!</h1>
        <Link to="/make-games">Make Games</Link>
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
