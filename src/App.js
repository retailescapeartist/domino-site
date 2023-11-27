
import React, { useState, useEffect } from 'react';
import './App.css';
import GameLibrary from './componets/GameLibrary';
import Navbar from './componets/Navbar';
import gameLibraryData from './data/gamelibrarydata.json';


const App = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    // Assuming you need to fetch data asynchronously
    // You can remove this if you're not fetching data asynchronously
    setGames(gameLibraryData);
    setFilteredGames(gameLibraryData);
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = games.filter((game) =>
      String(game.game).toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredGames(filtered);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <GameLibrary games={filteredGames} />
    </div>
  );
};

export default App;
