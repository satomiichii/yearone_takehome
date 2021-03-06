import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { fetchMovies, storeInput } from '../reducer';
import { Search } from './Search';
import MovieList from './MovieList';
import SingleMovie from './SingleMovie';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: this.props.input,
      totalPages: 0,
      currentPage: 1,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  async handlePageChange(event, value) {
    try {
      await this.setState({ currentPage: value });
      await this.props.getMovieList(this.state.input, this.state.currentPage);
    } catch (error) {
      console.log('handlePageChange error: ', error);
    }
  }

  handleUpdate(event) {
    this.setState({ input: event.target.value });
  }

  async handleSearch(event) {
    try {
      event.preventDefault();
      await this.setState({ currentPage: 1 });
      await this.props.saveInput(this.state.input);
      await this.props.getMovieList(this.state.input, this.state.currentPage);
      const totalPages = Math.ceil(this.props.movies.totalResults / 10);
      this.setState({ totalPages });
    } catch (error) {
      console.log('handleSearch error: ', error);
    }
  }

  render() {
    return (
      <Router>
        <div id="contents">
          <Route exact path="/">
            <h1>Search Movies!</h1>
            <Search
              handleUpdate={this.handleUpdate}
              handleSearch={this.handleSearch}
            />
            <MovieList
              totalPages={this.state.totalPages}
              currentPage={this.state.currentPage}
              handlePageChange={this.handlePageChange}
            />
          </Route>
          <Route path="/movie/:id/:title" component={SingleMovie} />
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
