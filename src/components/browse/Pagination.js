import React, { Component } from "react";

class Pagination extends Component {
  broadcastActiveGroupChange = (groupIndex) => {

  }

  render() {
    const groupsPassed = this.props.groups && this.props.groups.length > 0
    const groupsCount = groupsPassed ? this.props.groups.length : 0
    const activeGroupPassed = this.props.activeResultsGroup && this.props.activeResultsGroup.length > 0
    const activeIndex = activeGroupPassed ? this.props.activeResultsGroup[0].index : null

    return (
      <section className="search-pagination">
        <p className="pagination-meta">
          <strong>
            Page {activeIndex + 1} of {groupsCount}
          </strong>

          <span className="clickable-nav">
            {this.props.groups.map((result, i) => (
              <span 
                onClick={this.broadcastActiveGroupChange(result.index)}
                className={`group-click ${result.active ? 'active' : ''}`}
                key={i}>
              </span>
            ))}
          </span>
        </p>
      </section>
    );
  }
}

export default Pagination;
