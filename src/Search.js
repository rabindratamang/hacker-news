import React, { Component } from "react";

class Search extends Component {
  render() {
    const { value, onChange, children } = this.props;
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
  }
}

export default Search;
