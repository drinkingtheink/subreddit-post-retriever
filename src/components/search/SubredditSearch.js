import React, { Component } from 'react';
import BrowseSubredditSearchResults from '../browse/BrowseSubredditSearchResults'
import SearchErrorMessage from './SearchErrorMessage'
import {debounce} from 'throttle-debounce'

const redditBaseUrl = 'https://www.reddit.com'
const initialHeadline = 'Search Subreddits Here'

class SubredditSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: initialHeadline,
      searchTerm: '',
      searchFeedback: null,
      searchResults: [],
      readyToSubmitSearch: false,
      fetchingData: false,
      currentSubreddit: null,
      showError: false
    };
    this.searchTheReddits = debounce(500, this.searchTheReddits);
  }

  handleSearchTermChange = (e) => {
    let searchText = e.target.value || ''
  
    this.setState({
        searchTerm : searchText
    });
    
    if(searchText && searchText.length > 2) {
        this.clearSearchResults()
        this.setState({
          fetchingData : true
        });
        this.searchTheReddits(searchText)
    } 
  }

  searchTheReddits = (searchText) => {
    const subredditSearch = `/r/`
    const url = `${redditBaseUrl}${subredditSearch}${searchText}.json`

    fetch(url)
      .then(response => response.json())
      .then(response => this.composeSearchResults(response["data"]))
      .then(response => {
        this.setState({
          searchResults: response,
          fetchingData: false
        })
      })
      .catch(error => {
        this.setState({
          showError: true,
          fetchingData: false
        })
      })
  }

  composeSearchResults = (searchPayload) => {
    const composedSearchResults = searchPayload.children || []
    return composedSearchResults
  }

  resetSearch = () => {
    this.setState({
      headline: initialHeadline,
      searchTerm: '',
      searchFeedback: null,
      searchResults: [],
      readyToSubmitSearch: false,
      fetchingData: false,
      currentSubreddit: null,
      showError: false
    })
  }

  clearSearchResults = () => {
    this.setState({
      searchResults: []
    })
  }

  render() {
    return (
      <main className="subreddit-search">
        <div className="subreddit-search__input-stage">
          <h1 className="main-headline">{this.state.headline}</h1>
          <input 
            type="text"
            onChange={this.handleSearchTermChange.bind(this)}
            className="subreddit-search__input"
            placeholder="Start searching here..." 
            rel="subreddit-search__input" />

        </div>
        
        <section className="actions">
          { this.state.searchResults.length > 0 ? <button className="clear-search" onClick={this.resetSearch}>Clear Search</button> : null }
        </section> 

        <section className="results">
          { this.state.showError 
            ? <SearchErrorMessage errorMessage="Please try a different search term or try again later. Thank you." />
            : <BrowseSubredditSearchResults redditBaseUrl={redditBaseUrl} searchResults={this.state.searchResults} />
          }
        </section>
      </main>
    )
  }
}

export default SubredditSearch;
