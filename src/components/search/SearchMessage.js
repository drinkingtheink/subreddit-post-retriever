import React, { Component } from 'react';

class SearchMessage extends Component {
  render() {
    return (
      <div className="search-message">
        <h2>{this.props.headline}</h2>
        <p className="display_name">{this.props.message}</p>
      </div>
    )
  }
}

export default SearchMessage;