import React, { useState } from 'react';
import './css/searchBar.css';  // Import the CSS for styling

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');  // State to hold the input value

  const handleInputChange = (event) => {
    setQuery(event.target.value);  // Update the state with the input value
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {  
      onSearch(query);  
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Search..."
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;
