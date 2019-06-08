import React from "react"
import PropTypes from 'prop-types'

const Pagination = (props) => {
  const groupsPassed = props.groups && props.groups.length > 0
  const groupsCount = groupsPassed ? props.groups.length : 0

  return (
    <section className="search-pagination">
      <p className="pagination-meta">
        <strong>
          Page <span className="active-page-index">{ props.activeResultsPageIndex + 1 }</span> of <span className="total-groups-count">{groupsCount}</span>
        </strong>

        { groupsCount > 1 
          ? <span className="clickable-nav">
              {props.groups.map((result, i) => (
                <span 
                  className={ `group-click ${ i === props.activeResultsPageIndex ? 'active' : ''}` }
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

Pagination.propTypes = {
  groups: PropTypes.array,
  activeResultsPageIndex: PropTypes.number,
  activeResultsGroup: PropTypes.object
}

export default Pagination;
