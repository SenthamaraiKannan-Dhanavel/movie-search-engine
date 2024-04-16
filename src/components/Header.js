import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onSearch }) => {
  const handleSearch = (event) => {
    event.preventDefault();
    const searchQuery = event.target.elements.searchInput.value;
    onSearch(searchQuery);
  };

  return (
    <header>
      <nav>
        <Link to="/">
          <h1>Movie Search Engine</h1>
        </Link>
        <form onSubmit={handleSearch}>
          <input type="text" name="searchInput" placeholder="Search movies..." />
          <button type="submit">Search</button>
        </form>
      </nav>
    </header>
  );
};

export default Header;