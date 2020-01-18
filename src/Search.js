import React from "react";

const Search = ({ value, onChange, children }) => {
  return (
    <form>
      {children}
      <input
        type="text"
        placeholder="Search"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default Search;
