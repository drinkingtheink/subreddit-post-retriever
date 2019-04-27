import React, { Component } from 'react';

class SearchErrorMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: 'Whoops, looks like there was a problem with your search'
    };
  }

  render() {
    return (
      <div className="search-error-message">
        <h2>{this.state.headline}</h2>
        <p className="display_name">{this.props.errorMessage}</p>
      </div>
    )
  }
}

export default SearchErrorMessage;