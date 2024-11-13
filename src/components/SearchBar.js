import React from "react";

function SearchBar({ onSearch }) {
  return (
    <div className="searchbar">
      <label htmlFor="searchInput">Search Plants...</label>
      <input
        id="searchInput"
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search for plants"
      />
    </div>
  );
}

export default SearchBar;
