import React from 'react';

export const Search = (props) => {
  return (
    <div id="search">
      <form>
        <input
          type="text"
          name="input"
          placeholder="Movie title"
          onChange={props.handleUpdate}
        />
        <button
          value="Search"
          className="search-button"
          onClick={props.handleSearch}
        >
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
};
