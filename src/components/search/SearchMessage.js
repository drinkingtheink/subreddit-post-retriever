import React from 'react'
import PropTypes from 'prop-types'

const SearchMessage = (props) => {
  return (
    <div className="search-message">
      <h2>{ props.headline }</h2>
      <p className="message-text">{ props.message }</p>
    </div>
  )
}

SearchMessage.propTypes = {
  headline: PropTypes.string,
  message: PropTypes.string
}

export default SearchMessage;