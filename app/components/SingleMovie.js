import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleMovie, fetchVote, resetData, updateVote } from '../reducer';

class SingleMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleVote = this.handleVote.bind(this);
  }

  async handleVote(event) {
    const type = event.target.name;
    const dataBody = { ...this.props.vote };
    dataBody[type] = dataBody[type] + 1;
    console.log(dataBody);
    await this.props.updateVote(dataBody);
  }

  async componentDidMount() {
    await this.props.getMovieDetail(this.props.match.params.id);
    await this.props.getVoteData(this.props.match.params.title);
  }

  async componentWillUnmount() {
    this.props.clearState();
  }

  render() {
    const { detail, vote } = this.props;
    return (
      <div className="detail-container">
        <div className="single-image">
          <img
            src={(detail.Poster !== 'N/A' && detail.Poster) || '/noimage.png'}
          />
          <div className="vote-container">
            <div>
              <button
                name="thumsUp"
                onClick={this.handleVote}
                className="far fa-thumbs-up"
              />
              {vote.thumsUp}
            </div>
            <div>
              <button
                name="thumsDown"
                onClick={this.handleVote}
                className="far fa-thumbs-down"
              />
              {vote.thumsDown}
            </div>
          </div>
        </div>
        <div className="info-container">
          <h1>
            {detail.Title} <span className="year">({detail.Year})</span>
          </h1>
          <p>Director: {detail.Director}</p>
          <p>Cast: {detail.Actors}</p>
          <p>{detail.Plot}</p>
        </div>
        <div>
          <Link to={`/`}>Go Back</Link>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    detail: state.movie,
    vote: state.vote,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getMovieDetail: (id) => dispatch(fetchSingleMovie(id)),
    getVoteData: (title) => dispatch(fetchVote(title)),
    updateVote: (data) => dispatch(updateVote(data)),
    clearState: () => dispatch(resetData()),
  };
};

export default connect(mapState, mapDispatch)(SingleMovie);
