import React, { Component } from 'react';

class SubredditSearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: 'Search Subreddits Here',
      searchTerm: '',
      searchFeedback: null,
      readyToSubmitSearch: false
    };
  }

  handleSearchTermChange = (event) => {
    this.setState({
        searchTerm : event.target.value
    });
  }

  render() {
    return (
      <div className="subreddit-search-input-stage">
        <h1>{this.state.headline}</h1>
        <input 
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleSearchTermChange}
          className="subreddit-search-input"
          placeholder="Start searching here..." />
      </div>
    )
  }
}

export default SubredditSearchInput;
