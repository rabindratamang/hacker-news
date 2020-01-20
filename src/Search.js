import React from "react";

const Search = ({ value, onChange, children }) => {
  return (
    <form>
      <label htmlFor="search-btn">{children}</label>
      <input
        id="search-btn"
        type="text"
        placeholder="Search"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default Search;
