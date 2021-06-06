import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const MovieList = (props) => {
  console.log(props);
  const { movies, handlePageChange, currentPage, totalPages } = props;
  return (
    <div>
      {movies.Search && (
        <div id="list">
          <div className="list-container">
            {props.movies.Search.map((movie) => (
              <Link
                key={movie.imdbID}
                to={`/movie/${movie.imdbID}/${movie.Title}`}
              >
                <div className="title-container">
                  <div className="list-image">
                    <img
                      className="thumnail"
                      src={
                        (movie.Poster !== 'N/A' && movie.Poster) ||
                        '/noimage.png'
                      }
                    />
                  </div>

                  <div className="list-title">
                    {movie.Title}
                    <span> ({movie.Year})</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            className="pagenation"
          />
        </div>
      )}
      {movies.Error && <div>Movie not found!</div>}
    </div>
  );
};

const mapState = (state) => {
  return {
    movies: state.movies,
  };
};
export default connect(mapState, null)(MovieList);
