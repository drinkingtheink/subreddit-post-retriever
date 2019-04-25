import React, { Component } from 'react';
import BrowseSubredditSearchResults from '../browse/BrowseSubredditSearchResults'

const redditBaseUrl = 'https://www.reddit.com/subreddits/search.json?q='

class SubredditSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: 'Search Subreddits Here',
      searchTerm: '',
      searchFeedback: null,
      searchResults: [],
      readyToSubmitSearch: false
    };
  }

  handleSearchTermChange = (event) => {
    let searchText = event.target.value || null
    this.setState({
        searchTerm : searchText
    });

    if(searchText && searchText.length > 2) {
      this.searchTheReddits(searchText)
    } 
  }

  searchTheReddits = (searchText) => {
    const url = `${redditBaseUrl}${searchText}`

    fetch(url)
      .then(response => response.json())
      .then(response => this.composeSearchResults(response["data"]))
      .then(response => {
        this.setState({
          searchResults: response,
        })
      })
  }

  composeSearchResults = (searchPayload) => {
    const composedSearchResults = searchPayload.children || []
    return composedSearchResults
  }

  handleNoSearchResultsFound = () => {

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

        <BrowseSubredditSearchResults />
      </div>
    )
  }
}

export default SubredditSearch;
