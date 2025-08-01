import React, { useState } from "react";
import "./SearchBar.css"; // optional CSS file for styling

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value); // Call parent-provided function
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;