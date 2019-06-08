import React from "react"
import SearchResult from "./SearchResult"
import PropTypes from 'prop-types'

const BrowseSearchResults = (props) => {
  return (
    <div className="search-results-stage">
      <section className="search-results">
        {props.searchResultsGroup.list.map((result, index) => (
          <SearchResult
            redditBaseUrl={ props.redditBaseUrl }
            key={ index }
            result={ result.data }
          />
        ))}
      </section>
    </div>
  );
}

BrowseSearchResults.propTypes = {
  redditBaseUrl: PropTypes.string,
  searchResultsGroup: PropTypes.object
}

export default BrowseSearchResults;
