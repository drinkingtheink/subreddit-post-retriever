import React, { Component } from 'react';

class SubredditSearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchFeedback: null,
      readyToSubmitSearch: false
    };
  }

  handleSearchTermChange(state, event) {
    console.log(`SETTING STATE >>> ${this.state}`)
    state.setState((state, event) => ({
      searchTerm: event.target.value
    }));
  }

  render() {
    return (
      <div className="subreddit-search-input-stage">
        <h1>Search Here</h1>
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
