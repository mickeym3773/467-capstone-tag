import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function GameEdit() {
   const { gameId } = useParams();
   const navigate = useNavigate();
   const user = JSON.parse(localStorage.getItem('user'));

   const [gameRooms, setGameRooms] = useState([]);
   const [selectedRoomIndex, setSelectedRoomIndex] = useState(null);
   const [gameDetails, setGameDetails] = useState(null);

   useEffect(() => {
      const fetchGameDetails = async () => {
         try {
            const response = await fetch(`/games/details/${gameId}`);
            if (!response.ok) {
               throw new Error('Failed to fetch game details');
            }

            const data = await response.json();
            setGameDetails(data);
            setGameRooms(data.game.rooms);
         } catch (error) {
            console.error(error.message);
         }
      };

      fetchGameDetails();
   }, [gameId]);

   const handleFieldChange = (roomIndex, field, value) => {
      setGameRooms((prevRooms) => {
         const updatedRooms = [...prevRooms];
         updatedRooms[roomIndex] = {
            ...updatedRooms[roomIndex],
            [field]: value,
         };
         return updatedRooms;
      });
   };

   const addRoom = () => {
      const newRoomNumber = gameRooms.length + 1;
      const newRoom = {
         name: `New Room ${newRoomNumber}`,
         description: 'None provided - This is a description of the room.',
         first_visit: 'This is a description that is displayed the first time the player enters the room.',
         Items: '',
         Exits: '',
      };
      setGameRooms((prevRooms) => [...prevRooms, newRoom]);
   };

   const clearField = (roomIndex, field) => {
      setGameRooms((prevRooms) => {
         const updatedRooms = [...prevRooms];
         updatedRooms[roomIndex] = {
            ...updatedRooms[roomIndex],
            [field]: '',
         };
         return updatedRooms;
      });
   };

   const deleteRoom = (roomIndex) => {
      setGameRooms((prevRooms) => prevRooms.filter((_, index) => index !== roomIndex));
      setSelectedRoomIndex(null); // Reset selected room when deleting
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         console.log(`/games/${gameDetails._id}`);
         const response = await fetch(`/games/${gameDetails._id}`, {
            method: 'PATCH',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ game: { rooms: gameRooms } }),
         });

         if (!response.ok) {
            throw new Error('Failed to update data in the database');
         }

         console.log('Data successfully updated in the database');
      } catch (error) {
         console.error(error.message);
      }

      if (!user) {
         alert('You must be logged in to create a new game.');
         return;
      }

      // Redirect to the game details page
      navigate(`/games/details/${gameId}`);

      localStorage.setItem('game', JSON.stringify({ game: { rooms: gameRooms } }));
   };

   const handleRoomButtonClick = (roomIndex) => {
      setSelectedRoomIndex(roomIndex);
   };

   const renderRoomButtons = () => {
      return gameRooms.map((room, roomIndex) => (
         <button key={roomIndex} onClick={() => handleRoomButtonClick(roomIndex)}>
            {room.name}
         </button>
      ));
   };

   const renderSelectedRoomForm = () => {
      const selectedRoom = gameRooms[selectedRoomIndex];
      if (!selectedRoom) {
         return null;
      }

      return (
         <div className="yourgames-container">
            <h3>{selectedRoom.name}</h3>
            {Object.keys(selectedRoom).map((field) => (
               <div key={`${selectedRoomIndex}-${field}`}>
                  <label htmlFor={`${selectedRoomIndex}-${field}`}>{field}</label>
                  {field === 'description' || field === 'first_visit' ? (
                     <textarea
                        rows="4"
                        cols="50"
                        id={`${selectedRoomIndex}-${field}`}
                        value={selectedRoom[field]}
                        onChange={(e) => handleFieldChange(selectedRoomIndex, field, e.target.value)}
                     />
                  ) : (
                     <input
                        type="text"
                        id={`${selectedRoomIndex}-${field}`}
                        value={selectedRoom[field]}
                        onChange={(e) => handleFieldChange(selectedRoomIndex, field, e.target.value)}
                     />
                  )}
                  <button type="button" onClick={() => clearField(selectedRoomIndex, field)}>
                     Clear
                  </button>
               </div>
            ))}
            <button type="button" onClick={() => deleteRoom(selectedRoomIndex)}>
               Delete Room
            </button>
         </div>
      );
   };

   return (
      <div className="yourgames-container">
         <div className="room-buttons-container">{renderRoomButtons()}</div>
         <div className="selected-room-form-container">{renderSelectedRoomForm()}</div>
         <form onSubmit={handleSubmit}>
            <button type="button" onClick={addRoom}>
               Add Room
            </button>
            <button type="submit">Save</button>
         </form>
      </div>
   );
}

export default GameEdit;
