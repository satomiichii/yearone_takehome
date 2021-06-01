import React from 'react';

export const Search = (props) => {
  return (
    <div>
      <div>This is Search component</div>
      <form>
        <input type="text" name="input" onChange={props.handleUpdate} />
        <input type="submit" value="Search" onClick={props.handleSearch} />
      </form>
    </div>
  );
};
