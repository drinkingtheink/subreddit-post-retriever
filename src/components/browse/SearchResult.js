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

    let commentsCount = this.props.result.num_comments ? this.props.result.num_comments : false
    let commentsSubmitted = commentsCount > 0

    function Thumbnail({thumbnail}) {
      if (thumbnail !== '' && thumbnail !== 'self') {
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
            <i className="fa fa-user"></i> 
            Unknown
          </p>
        );
      }
    }

    let revealAnimation = {
      animationDelay: '.' + (this.props.result.entry) * 100 + '.ms'
    };

    return (
      <div className="search-result">
        <header className="post-headline">
          <a 
            href={ this.props.redditBaseUrl + '/' + this.props.result.permalink } 
            alt={ this.props.result.title }
            target="_blank"
            rel="noopener noreferrer"
            className={revealAnimation}
            >
              <span className="post-title">{ this.props.result.title }</span>
              
              { commentsSubmitted 
                ? <section className="post-comments-count">{ commentsCount } Comments</section>
                : 
                null 
              }

          </a>
        </header>
        <p className="result-display_name">{ this.props.result.display_name_prefixed }</p>
        <Author author={ this.props.result.author } thumbnail={ this.props.result.thumbnail } />
      </div>
    )
  }
}

export default SearchResultCard;
