import React, { Component } from "react";
import SearchResult from "./SearchResult";

class BrowseSearchResults extends Component {
  render() {
    return (
      <div className="search-results-stage">
        <section className="search-results">
          {this.props.searchResultsGroup.map((group, index) => (
            <span className="search-results-wrapper" key={index}>
              {group.list.map((result, i) => (
                <SearchResult
                  redditBaseUrl={this.props.redditBaseUrl}
                  key={i}
                  result={result.data}
                />
              ))}
            </span>
          ))}
        </section>
      </div>
    );
  }
}

export default BrowseSearchResults;
