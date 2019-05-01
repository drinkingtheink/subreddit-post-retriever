import React, { Component } from "react";
import SearchResult from "./SearchResult";

class BrowseSearchResults extends Component {
  render() {
    return (
      <div className="search-results-stage">
        <section className="search-results">
          {this.props.searchResultsGroup.list.map((result, index) => (
            <SearchResult
              redditBaseUrl={this.props.redditBaseUrl}
              key={index}
              result={result.data}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default BrowseSearchResults;
