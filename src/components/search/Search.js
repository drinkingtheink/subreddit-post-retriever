import React, { Component } from 'react';
import BrowseSearchResults from '../browse/BrowseSearchResults'
import Pagination from '../browse/Pagination'
import SearchMessage from './SearchMessage'
import {debounce} from 'throttle-debounce'

const redditBaseUrl = 'https://www.reddit.com'
const initialHeadline = 'Search Subreddits Here'

class Search extends Component {
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
        searchTerm : searchText,
        showError: false
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
      .then(response => this.distillSearchResults(response["data"]))
      .then(composedSearchResults => this.generateResultsGroups(composedSearchResults, 10))
      .then(composedSearchGroups => {
        this.setState({
          searchResults: composedSearchGroups,
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

  distillSearchResults = (searchPayload) => {
    const composedSearchResults = searchPayload.children || []
    return composedSearchResults
  }

  generateResultsGroups = (rawResults, groupSize) => {
    let index = 0
    const arrayLength = rawResults.length
    const groupList = []
    let entry = 0
    
    for (index = 0; index < arrayLength; index += groupSize) {
      let newGroup = {
        index: entry++,
        active: false,
        list: rawResults.slice(index, index+groupSize)
      }
      groupList.push(newGroup)
    }

    groupList[0].active = true
    return groupList
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
    this.refs.search.value = ''
    this.refs.search.focus()
  }

  clearSearchResults = () => {
    this.setState({
      searchResults: []
    })
  }

  componentDidMount(){
    this.refs.search.focus()
  }

  render() {
    const searchResultsFound = this.state.searchResults && this.state.searchResults.length > 0
    const searchResultsCount = searchResultsFound ? this.state.searchResults.length : 0
    let activeResultsGroup = this.state.searchResults.filter(result => result.active) || false

    return (
      <main className="subreddit-search">
        <div className="subreddit-search__input-stage">
          <h1 className="main-headline">{this.state.headline}</h1>
          <input 
            type="text"
            onChange={this.handleSearchTermChange.bind(this)}
            className="subreddit-search__input"
            placeholder="Start searching here..." 
            ref="search" />
        </div>

        { this.state.fetchingData ? <p className="fetching-data">Fetching Data...</p> : null }

        <section className="actions">
          { searchResultsFound ? <button className="{ clear-search, this.state.searchTerm.length > 0 ? '' : 'disabled' }" onClick={this.resetSearch}>Clear Search</button> : null }
        </section>  

        <section className="results">
          {searchResultsFound ? (
            <h2>
              <span>({searchResultsCount})</span> 
              Search Result{ searchResultsCount > 1 || searchResultsCount ? 's' : null }
            </h2>
          ) : null}


          { this.state.showError 
            ? <SearchMessage headline="Whoops, something went wrong with your search" message="Please try a different search term or try again later. Thank you." />
            : null
          }

          { searchResultsFound 
            ? <Pagination groups={this.state.searchResults} />
            : null
          }

          { activeResultsGroup 
            ? <BrowseSearchResults 
                redditBaseUrl={redditBaseUrl} 
                searchResultsGroup={activeResultsGroup} 
                searchResultsFound={searchResultsFound}
                searchResultsCount={searchResultsCount}
              />
            : null
          }

          { !this.state.searchTerm && !this.state.showError 
            ? <SearchMessage headline="You should enter a search term" message="Start typing to start searching..." />
            : null
          }
        </section>
      </main>
    )
  }
}

export default Search;
