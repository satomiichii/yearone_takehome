import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleMovie, fetchVote } from '../reducer';

class SingleMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleVote = this.handleVote.bind(this);
  }

  async handleVote(type) {
    const dataBody = { ...this.props.vote };
    if (type === 'up') {
      dataBody.thumsUp++;
    } else {
      dataBody.thumsDown++;
    }
    await this.props.updateVote(dataBody);
  }

  async componentDidMount() {
    await this.props.getMovieDetail(this.props.match.params.id);
    await this.props.getVoteData(this.props.match.params.title);
  }

  render() {
    console.log(this.props);
    const { detail, vote } = this.props;
    return (
      <div className="detail-container">
        <div className="single-image">
          <img src={detail.Poster} />
          <div>
            👍{vote.thumsUp} 👎{vote.thumsDown}
          </div>
        </div>
        <div>
          <p>{detail.Title}</p>
          <p>{detail.Director}</p>
          <p>{detail.Year}</p>
          <p>{detail.Plot}</p>
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
  };
};

export default connect(mapState, mapDispatch)(SingleMovie);
