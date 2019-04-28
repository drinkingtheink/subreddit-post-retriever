import React, { Component } from 'react';

class SearchResultCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: 'Pretty Cool, Right?'
    };
  }

  render() {

    let thumbStyle = {
      backgroundImage: 'url(' + this.props.result.thumbnail + ')'
    };

    function Thumbnail({thumbnail}) {
      if (thumbnail !== 'self') {
        return (
          <span className="post-thumbnail" style={thumbStyle}></span>
        )
      } else {
        return null
      }
    }

    function Author({ author, thumbnail }) {
      if (author) {
        return (
          <p className="post-author attributed">
            <Thumbnail thumbnail={thumbnail} /> 
            {author}
          </p>
        );
      } else {
        return (
          <p className="post-author unattributed">
            <i class="fa fa-user"></i> 
            Unknown
          </p>
        );
      }
    }

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
        <p className="result-display_name">{this.props.result.display_name_prefixed}</p>
        <Author author={this.props.result.author} thumbnail={this.props.result.thumbnail} />
      </div>
    )
  }
}

export default SearchResultCard;