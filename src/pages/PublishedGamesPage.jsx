
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import PublishedGamesList from '../components/PublishedGamesList';

function PublishedGamesPage() {
  const [gameToPlay, setGameToPlay] = useState(null);

  return (
    <div className="publishedgames-container">
      <h1>Published Games</h1>
      <PublishedGamesList setGameToPlay={setGameToPlay} />
      <button><Link to="/">Home</Link></button>
    </div>
  )
}
export default PublishedGamesPage;
