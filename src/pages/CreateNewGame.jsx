import React from 'react';
import { Link } from 'react-router-dom';

function CreateNewGame() {
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
              <input type="text" id="new-game-name" name="new-game-name" className="createNewGame-name" required maxLength="100" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="new-game-description">New Game Description:</label>
              </td>
              <td>
              <textarea id="new-game-description" name="new-game-description" className="createNewGame-description" required maxLength="500"></textarea>
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ textAlign: 'center' }}>
                <button><Link to="/make-games">Back to Your Games</Link></button>
                <button type="submit"><Link to="/game-edit-new">Create Game</Link></button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default CreateNewGame;
