import React, { Component } from 'react';
import Adapter from './Adapter';
import TVShowList from './Components/TVShowList';
import Filter from './Components/Filter';
import './App.css';

class App extends Component {

  state = {
    shows: [],
    query: ''
  }

  componentDidMount() {
    Adapter.getShows()
    .then(json => this.setState({
      shows: json
    }))
  }

  showSearch = () => {
    return this.state.shows.filter(
      (show) => show.type.toLowerCase().includes(this.state.query.toLowerCase()))
  }

  handleSearch = (e) => {
    this.setState({
      query: e.target.value
    })
  }


  render = () => {
    return (
      <div className="App">
        <TVShowList shows={this.showSearch()}/>
        <Filter handleSearch={this.handleSearch}/>
      </div>
    );
  }


}

export default App;
