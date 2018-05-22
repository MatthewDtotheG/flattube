import React, { Component } from 'react';

class Filter extends Component {
  render = () => {
    return (
      <div className="filter">
          <h1>SEARCH</h1>
          <form>
            <input
              placeholder="Search for..."
              value={this.props.query}
              onChange={this.props.handleSearch}
              />
          </form>
      </div>
    );
  }
}

export default Filter;
