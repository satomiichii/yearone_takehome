import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      searchWord: '',
      movieList: [],
    };
  }

  //   handleSearch() {
  //     //Make API request to Movie API with user input
  //   }

  render() {
    return <div>React Home Component Rendered</div>;
  }
}

ReactDOM.render(<Home />, document.getElementById('app'));
