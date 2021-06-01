import axios from 'axios';

const END_POINT = 'https://movie-database-imdb-alternative.p.rapidapi.com/';
const HEADERS = {
  'x-rapidapi-key': process.env.REACT_APP_API_KEY,
  'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
  useQueryString: true,
};
const STORE_USER_INPUT = 'USER_INPUT';
const SET_MOVIES = 'SET_MOVIES';
const SET_SINGLE_MOVIE = 'SET_SINGLE_MOVIE';
const SET_VOTE = 'SET_VOTE';
const CHANGE_VOTE = 'CHANGE_VOTE';

const setMovies = (movies) => {
  return {
    type: SET_MOVIES,
    movies,
  };
};

const setSingleMovie = (movie) => {
  return {
    type: SET_SINGLE_MOVIE,
    movie,
  };
};
const storeUserInput = (input) => {
  return {
    type: STORE_USER_INPUT,
    input,
  };
};

const setVote = (vote) => {
  return {
    type: SET_VOTE,
    vote,
  };
};

const changeVote = (updatedVote) => {
  return {
    type: CHANGE_VOTE,
    updatedVote,
  };
};

export const fetchMovies = (input, page) => {
  return async (dispatch) => {
    try {
      const options = {
        method: 'GET',
        url: END_POINT,
        params: { s: input, page: page, type: 'movie', r: 'json' },
        headers: HEADERS,
      };
      const { data } = await axios.request(options);
      dispatch(setMovies(data));
    } catch (error) {
      console.log('Error in fetchMovies thunk', error);
    }
  };
};

export const fetchSingleMovie = (id) => {
  return async (dispatch) => {
    try {
      const options = {
        method: 'GET',
        url: END_POINT,
        params: { i: id, r: 'json' },
        headers: HEADERS,
      };

      const { data } = await axios.request(options);
      console.log('Single Movie', data);
      dispatch(setSingleMovie(data));
    } catch (error) {
      console.log('Error in fetchSingelMovie thunk', error);
    }
  };
};

export const storeInput = (input) => {
  return async (dispatch) => {
    try {
      dispatch(storeUserInput(input));
    } catch (error) {
      console.log('Error in storeInput thunk', error);
    }
  };
};

export const fetchVote = (title) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/movies/${title}`);
      dispatch(setVote(data));
    } catch (error) {
      console.log('Error in fetchVote thunk', error);
    }
  };
};

export const updateVote = (dataBody) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/movies', dataBody);
      dispatch(changeVote(data));
    } catch (error) {
      console.log('Error in updateVote thunk', error);
    }
  };
};

const reducer = (
  state = { input: '', movies: {}, movie: {}, vote: {} },
  action
) => {
  switch (action.type) {
    case STORE_USER_INPUT:
      return { ...state, input: action.input };

    case SET_MOVIES:
      return { ...state, movies: action.movies };

    case SET_SINGLE_MOVIE:
      return { ...state, movie: action.movie };

    case SET_VOTE:
      return { ...state, vote: action.vote };

    case CHANGE_VOTE:
      return { ...state, vote: action.updatedVote };

    default:
      return state;
  }
};

export default reducer;
