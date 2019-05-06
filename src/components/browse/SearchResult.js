import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SearchResultCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: 'Pretty Cool, Right?'
    };
  }

  render() {
    let commentsCount = this.props.result.num_comments ? this.props.result.num_comments : false
    let commentsSubmitted = commentsCount > 0

    function SubredditPrefixed({ subredditNamePrefixed }) {
      if (subredditNamePrefixed) {
        return <p className="prefixed-subreddit">{subredditNamePrefixed}</p>
      } else {
        return null
      }
    }

    function Author({ author }) {
      if (author) {
        return (
          <p className="post-author attributed">{author}</p>
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
              <SubredditPrefixed subredditNamePrefixed={ this.props.result.subreddit_name_prefixed }/>
              <span className="post-title">{ this.props.result.title }</span>
              
              { commentsSubmitted 
                ? <section className="post-comments-count">{ commentsCount } Comments</section>
                : 
                null 
              }

          </a>
        </header>
        <p className="result-display_name">{ this.props.result.display_name_prefixed }</p>
        <Author author={ this.props.result.author } />
      </div>
    )
  }
}

SearchResultCard.propTypes = {
  redditBaseUrl: PropTypes.string,
  result: PropTypes.object
}

export default SearchResultCard;
