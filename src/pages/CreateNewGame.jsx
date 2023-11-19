import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function CreateNewGame() {
  const [newGameName, setNewGameName] = useState('');
  const [newGameDescription, setNewGameDescription] = useState('');
  const [newGameIsPublished, setNewGameIsPublished] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));

  const checkHandler = () => {
    setNewGameIsPublished(!newGameIsPublished);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newGame = {
      title: newGameName,
      description: newGameDescription,
      author_id: user.uid,
      author_name: user.email,
      is_published: newGameIsPublished,
    };

    if (!user) {
      alert('You must be logged in to create a new game.');
      return;
    }

    const response = await fetch('/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newGame),
    });

    if (response.status === 201) {
      alert('Game created successfully!');
      const data = await response.json();
      //Not implemented yet
      //navigate(`/game-edit-new/${data._id}`);
    }
    else {
      alert(`Failed to create game. Status code = ${response.status}`);
    }
  }


  return (
    <div>
      <h1>Create a New Game</h1>
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="new-game-name">New Game Name:</label>
              </td>
              <td>
                <input type="text" id="new-game-name" name="new-game-name" className="createNewGame-name" required maxLength="100"
                  value={newGameName} onChange={(event) => setNewGameName(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="new-game-description">New Game Description:</label>
              </td>
              <td>
                <textarea id="new-game-description" name="new-game-description" className="createNewGame-description" required maxLength="500"
                  value={newGameDescription} onChange={(event) => setNewGameDescription(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="is_published">Publish Game?</label>
              </td>
              <td>
                <input type="checkbox" id="is_published" name="is_published" className="createNewGame-isPublished"
                  checked={newGameIsPublished} onChange={checkHandler}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ textAlign: 'center' }}>
                <button><Link to="/make-games">Back to Your Games</Link></button>
                <button onClick={handleSubmit}>Create Game</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default CreateNewGame;
