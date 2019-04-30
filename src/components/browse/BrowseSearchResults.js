import React, { Component } from "react";
import SearchResult from "./SearchResult";

class BrowseSearchResults extends Component {
  render() {
    return (
      <div className="search-results-stage">
        <section className="search-results">
          {this.props.searchResults.map((group, key) => {
              return group.map((subitem, i) => {
                return (
                   <SearchResult
                    redditBaseUrl={this.props.redditBaseUrl}
                    key={subitem.key}
                    result={subitem.data}
                  />
                )
              })
             }
            )
          }
        </section>
      </div>
    );
  }
}

export default BrowseSearchResults;
