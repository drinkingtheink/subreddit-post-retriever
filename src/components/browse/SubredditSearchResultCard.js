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
        <h2 className="post-headline">
          <a 
            href={this.props.redditBaseUrl + '/' + this.props.result.permalink} 
            alt={this.props.result.title}
            target="_blank"
            rel="noopener noreferrer"
            >
              {this.props.result.title}
          </a>
        </h2>
        <p className="display_name">{this.props.result.display_name_prefixed}</p>
        <p className="author">By: {this.props.result.author}</p>
      </div>
    )
  }
}

export default SubredditSearchResultCard;