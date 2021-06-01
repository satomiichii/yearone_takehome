import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { fetchMovies, storeInput } from '../reducer';
import { Search } from './Search';
import { MovieList } from './MovieList';
import SingleMovie from './SingleMovie';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: this.props.input,
      page: 1,
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleUpdate(event) {
    this.setState({ input: event.target.value });
  }

  async handleSearch(event) {
    event.preventDefault();
    //Make API request to Movie API with user input
    this.props.saveInput(this.state.input);
    await this.props.getMovieList(this.state.input, this.state.page);
    console.log('After getMovieList: ', this.props.input);
    console.log(this.props.movies);
  }

  render() {
    console.log(this.props);
    return (
      <Router>
        <div>React Home Component Rendered</div>
        <div>
          <Route exact path="/">
            <Search
              handleUpdate={this.handleUpdate}
              handleSearch={this.handleSearch}
            />
            <MovieList state={this.state} />
          </Route>
          <Route path="/movie/:title" component={SingleMovie} />
        </div>
      </Router>
    );
  }
}

const mapState = (state) => {
  return {
    input: state.input,
    movies: state.movies,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getMovieList: (input, page) => dispatch(fetchMovies(input, page)),
    saveInput: (input) => dispatch(storeInput(input)),
  };
};
export default connect(mapState, mapDispatch)(Home);