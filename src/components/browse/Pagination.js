import React, { Component } from "react"
import PropTypes from 'prop-types'

class Pagination extends Component {
  broadcastActiveGroupChange = (groupIndex) => {

  }

  render() {
    const groupsPassed = this.props.groups && this.props.groups.length > 0
    const groupsCount = groupsPassed ? this.props.groups.length : 0

    return (
      <section className="search-pagination">
        <p className="pagination-meta">
          <strong>
            Page {this.props.activeResultsPageIndex + 1} of {groupsCount}
          </strong>

          { groupsCount > 1 
            ? <span className="clickable-nav">
                {this.props.groups.map((result, i) => (
                  <span 
                    onClick={this.broadcastActiveGroupChange(result.index)}
                    className={`group-click ${ i === this.props.activeResultsPageIndex ? 'active' : ''}`}
                    key={i}>
                  </span>
                ))}
              </span>
            : null
          }
        </p>
      </section>
    );
  }
}

Pagination.propTypes = {
  groups: PropTypes.array,
  activeResultsPageIndex: PropTypes.number,
  activeResultsGroup: PropTypes.object
}

export default Pagination;
