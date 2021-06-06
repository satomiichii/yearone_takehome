import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleMovie, fetchVote, resetData, updateVote } from '../reducer';

class SingleMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
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
    this.setState({ loaded: true });
  }

  async componentWillUnmount() {
    this.props.clearState();
  }

  render() {
    const { detail, vote } = this.props;
    return (
      <div>
        {(this.state.loaded && (
          <div className="singleView-container">
            <div className="detail-container">
              <div className="image-vote-container">
                <div className="single-image">
                  <img
                    src={
                      (detail.Poster !== 'N/A' && detail.Poster) ||
                      '/noimage.png'
                    }
                  />
                </div>
                <div className="vote-container">
                  <div>
                    <button
                      name="thumsUp"
                      onClick={this.handleVote}
                      className="fas fa-thumbs-up"
                    />
                    {vote.thumsUp}
                  </div>
                  <div>
                    <button
                      name="thumsDown"
                      onClick={this.handleVote}
                      className="fas fa-thumbs-down"
                    />
                    {vote.thumsDown}
                  </div>
                </div>
              </div>
              <div className="info-container">
                <div className="title">
                  <h1>{detail.Title}</h1>
                  <span className="year">({detail.Year})</span>
                  <span className={`rate ${detail.Rated}`}>{detail.Rated}</span>
                </div>
                <div className="label">Director</div>
                <p>{detail.Director}</p>
                <div className="label">Cast</div>
                <p>{detail.Actors}</p>
                <div className="label">Genre</div>
                <p>{detail.Genre}</p>
                <div className="label">Awards</div>
                <p>{detail.Awards}</p>
                <div className="label">Plot</div>
                <p>{detail.Plot}</p>
              </div>
            </div>
            <div className="goback">
              <Link to={`/`}>Go Back</Link>
            </div>
          </div>
        )) || <div>LOADING</div>}
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
