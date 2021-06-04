import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const MovieList = (props) => {
  console.log(props);
  const classes = useStyles();
  const { movies, handlePageChange, currentPage, totalPages } = props;
  return (
    <div className="list-container">
      {movies.Search && (
        <div className={classes.root}>
          {props.movies.Search.map((movie) => (
            <div className="title-container" key={movie.imdbID}>
              <div className="list-image">
                <img
                  className="thumnail"
                  src={
                    (movie.Poster !== 'N/A' && movie.Poster) || '/noimage.png'
                  }
                />
              </div>
              <div>
                <Link to={`/movie/${movie.imdbID}/${movie.Title}`}>
                  {movie.Title}
                </Link>
                <span> ({movie.Year})</span>
              </div>
            </div>
          ))}
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

const mapState = (state) => {
  return {
    movies: state.movies,
  };
};
export default connect(mapState, null)(MovieList);

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));
