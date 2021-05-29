import React from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import { fetchMovies, storeInput } from '../reducer';
import { Search } from './Search';
import { MovieList } from './MovieList';
import SingleMovie from './SingleMovie';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: this.props.input,
      movies: this.props.movies,
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    // this.handleSearch = this.handleSearch.bind(this);
  }

  handleUpdate(event) {
    this.setState({ input: event.target.value });
  }

  // async handleSearch() {
  //     //Make API request to Movie API with user input
  //     this.props.saveInput(this.state.input)
  //     await this.props.getMovieList(this.state.input)
  //   }

  render() {
    return (
      <Router>
        <div>React Home Component Rendered</div>
        <div>
          <Route exact path="/" component={Search} />
          <Route exact path="/" component={MovieList} />
          <Route exact path="/movie/:title" component={SingleMovie} />
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
    getMovieList: (input) => dispatch(fetchMovies(input)),
    saveInput: (input) => dispatch(storeInput(input)),
  };
};
export default connect(mapState, mapDispatch)(Home);
