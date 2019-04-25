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
        <p>Check Me Out</p>
      </div>
    )
  }
}

export default SubredditSearchResultCard;