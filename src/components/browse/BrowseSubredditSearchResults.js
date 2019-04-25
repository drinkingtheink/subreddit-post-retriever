import React, { Component } from 'react';

class BrowseSubredditSearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: 'Pretty Cool, Right?'
    };
  }

  render() {
    return (
      <div className="subreddit-search-results-stage">
        <h2>{this.state.headline}</h2>

        <section className="subreddit-search-results">
          <h2>Results will go here</h2>
        </section>
      </div>
    )
  }
}

export default BrowseSubredditSearchResults;