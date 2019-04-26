import React, { Component } from 'react';

class SubredditSearchResultCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: 'Pretty Cool, Right?'
    };
  }

  render() {
    return (
      <div className="search-result">
        <h2>
          <a 
            href={this.props.redditBaseUrl + '/' + this.props.result.permalink} 
            alt={this.props.result.title}
            target="_blank"
            rel="noopener noreferrer"
            >
              {this.props.result.title}
          </a>
        </h2>
        <p>{this.props.result.display_name_prefixed}</p>
        <p>By: {this.props.result.author}</p>
        <p>{this.props.result.selftext}</p>
      </div>
    )
  }
}

export default SubredditSearchResultCard;