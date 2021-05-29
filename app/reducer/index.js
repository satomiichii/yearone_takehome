import axios from 'axios';

const STORE_USER_INPUT = 'USER_INPUT';
const SET_MOVIES = 'SET_MOVIES';

const setMovies = (movies) => {
  return {
    type: SET_MOVIES,
    movies,
  };
};

const storeUserInput = (input) => {
  return {
    type: STORE_USER_INPUT,
    input,
  };
};

export const fetchMovies = (input) => {
  return async (dispatch) => {
    try {
      //Make API request to Movie API
      const { data } = await axios.get(endpoint);
      dispatch(setMovies(data));
    } catch (error) {
      console.log('Error in fetchMovies thunk', error);
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

const reducer = (state = { input: '', movies: [] }, action) => {
  switch (action.type) {
    case STORE_USER_INPUT:
      return { ...state, input: action.input };

    case SET_MOVIES:
      return { ...state, movies: action.movies };

    default:
      return state;
  }
};

export default reducer;
