import React, { Component } from "react";
import SearchResult from "./SearchResult";

class BrowseSearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: "Search Results"
    };
  }

  render() {
    return (
      <div className="search-results-stage">
        {this.props.searchResults.length > 0 ? (
          <h2>{this.state.headline}</h2>
        ) : null}

        <section className="search-results">
          {this.props.searchResults.map((item, key) => (
            <SearchResult
              redditBaseUrl={this.props.redditBaseUrl}
              key={key}
              result={item.data}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default BrowseSearchResults;
