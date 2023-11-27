import React from 'react';
import './Navbar.css';

const Navbar = ({ onSearch }) => {
  const switchTheme = (theme) => {
    // You can implement further theme-related logic here
    // For simplicity, we are just toggling a class on the body element
    document.body.classList.toggle('dark-theme', theme === 'dark');
  };

  return (
    <div className="navbar">
      <h1>Game Library</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Navbar;
