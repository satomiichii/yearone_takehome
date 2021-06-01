import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const MovieList = (props) => {
  console.log(props.movies.Search);
  return (
    <div className="list-container">
      Movie List
      {props.movies.Search &&
        props.movies.Search.map((movie) => (
          <div className="title-container" key={movie.imdbID}>
            <div className="list-image">
              <img className="thumnail" src={movie.Poster} />
            </div>
            <div>
              <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
            </div>
          </div>
        ))}
    </div>
  );
};

const mapState = (state) => {
  return {
    movies: state.movies,
  };
};
export default connect(mapState, null)(MovieList);
