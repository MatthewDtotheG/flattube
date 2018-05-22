import React, { Component } from 'react';
import TvShow from './TvShow';

class TVShowList extends Component {


  render() {
    console.log(this.props.shows)

    return (
      <div className="tvShowList">
        {this.props.shows.map((show) => < TvShow showData={show} />)}
      </div>
    );
  }

}

export default TVShowList;
