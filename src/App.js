import React, { Component } from 'react';
import { get } from 'axios';
import './App.css';

import NearbyList from './components/NearbyList';
import SelectedProfile from './components/SelectedProfile';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      profiles: [],
      selectedProfile: ''
    };
    this.onPutRequest = this.onPutRequest.bind(this);
    this.onProfileClicked = this.onProfileClicked.bind(this);
  }

  onProfileClicked(attributes) {
    this.setState({ selectedProfile: attributes });
  }

  onPutRequest(profiles) {
    get(`http://localhost:3000/profiles`)
    .then(({ data }) => {
      this.setState({ profiles: data.data }); //this is verbose because Rails should spit out the raw array
    });
  }

  render() {
    const { profiles } = this.state;

    return (
      <main>
        <NearbyList profiles={profiles} onProfileClicked={this.onProfileClicked}/>
        <button onClick={this.onPutRequest}>Put request</button>
      </main>
    );
  }
}

export default App;
