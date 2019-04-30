import React, { Component } from "react";
import SearchResult from "./SearchResult";

class BrowseSearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: " Search Results"
    };
  }

  render() {
    return (
      <div className="search-results-stage">
        {this.props.searchResultsFound ? (
          <h2>
            <span>({this.props.searchResultsCount})</span> 
            {this.state.headline}
          </h2>
        ) : null}

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
