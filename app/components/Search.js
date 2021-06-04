import React from 'react';

export const Search = (props) => {
  return (
    <div>
      <form>
        <input type="text" name="input" onChange={props.handleUpdate} />
        <input type="submit" value="Search" onClick={props.handleSearch} />
      </form>
    </div>
  );
};
