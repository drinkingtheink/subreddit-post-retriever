import React, { Component } from 'react';
import SubredditSearchResultCard from './SubredditSearchResultCard';

class BrowseSubredditSearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: 'Search Results'
    };
  }

  render() {

    return (
      <div className="subreddit-search-results-stage">
        <h2>{this.state.headline}</h2>

        <section className="subreddit-search-results">
          {this.props.searchResults.map((item, key) =>
            <SubredditSearchResultCard 
              redditBaseUrl={this.props.redditBaseUrl}
              key={key} 
              result={item.data} />
          )}
        </section>
      </div>
    )
  }
}

export default BrowseSubredditSearchResults;