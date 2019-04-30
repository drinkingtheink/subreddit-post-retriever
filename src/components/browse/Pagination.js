import React, { Component } from "react";

class Pagination extends Component {
  render() {
    const groupsPassed = this.props.groups && this.props.groups.length > 0
    const groupsCount = groupsPassed ? this.props.groups.length : 0

    return (
      <h3>Groups: {groupsCount}</h3>
    );
  }
}

export default Pagination;
