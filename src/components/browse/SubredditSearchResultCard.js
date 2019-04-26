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
        <h2>{this.props.result.title}</h2>
        <p>{this.props.result.display_name_prefixed}</p>
        <p>{this.props.result.public_description}</p>
      </div>
    )
  }
}

export default SubredditSearchResultCard;