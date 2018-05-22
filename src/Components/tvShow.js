import React from 'react';
import {Card, Col} from 'react-materialize'
import Adapter from '../Adapter';
class TvShow extends React.Component {

  state = {
    clicked: false,
    episodes: []
  }

handleClick = () => {
  console.log('clicked')
    if (!this.state.clicked) {
      Adapter.getShowEpisodes(this.props.showData.id).then(json =>
      this.setState(
        {
          clicked: !this.state.clicked,
          episodes: json
        }
      )
    )
  } else {
    this.setState(
      {
        clicked: !this.state.clicked,
        episodes: []
      }
    )
  }
}

render() {

  return (
    <Col m={6} s={12}>
      <Card onClick={this.handleClick} className='blue-grey darken-1'
        textClassName='white-text'
        title={this.props.showData.name}
      >
      {this.state.episodes.map(episode =>
        <div>
        <p> episode: {episode.name} </p>
        <p> season: {episode.season} </p>
        </div>
      )}

      </Card>
    </Col>
  );

  }
}

export default TvShow;
