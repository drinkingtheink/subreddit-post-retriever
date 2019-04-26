import React, { Component } from 'react';
import BrowseSubredditSearchResults from '../browse/BrowseSubredditSearchResults'

class SubredditSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: 'Search Subreddits Here',
      searchTerm: '',
      searchFeedback: null,
      searchResults: [],
      readyToSubmitSearch: false,
      fetchingData: false,
      currentSubreddit: null
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
    const url = `https://www.reddit.com/r/${searchText}.json`

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

  toggleFetchingDataFlag = (pref) => {
    this.setState({
        fetchingData : pref
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

        <BrowseSubredditSearchResults searchResults={this.state.searchResults} />
      </div>
    )
  }
}

export default SubredditSearch;
