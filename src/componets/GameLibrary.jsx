import './GameLibrary.css'
import React from 'react';

const GameLibrary = ({ games }) => {
    return (
      <div className="game-library">
        <h1 className='library-title'>Game Library</h1>
        <div className="card-container">
          {games.map((game, index) => (
            <div key={index} className="card">
              <h2>{game.game}</h2>
              <p>{game.description}</p>
              <ul>
                <li>Date: {game.date}</li>
                <li>Year: {game.year}</li>
                <li>Platform: {game.platform}</li>
                {/* Include other details as needed */}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default GameLibrary;
