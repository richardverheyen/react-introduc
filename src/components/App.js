import React, { Component } from 'react';
import { get } from 'axios';
import '../App.css';

import MainPage from './MainPage'
import SelectedProfile from './SelectedProfile'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedProfile: {},
      userProfile: {},
      profiles: []
    };
    this.onProfileClicked = this.onProfileClicked.bind(this);
    this.onPutRequest = this.onPutRequest.bind(this);
  }

  onPutRequest(profiles) {
    get(`http://localhost:3000/profiles`)
    .then(({ data }) => {
      console.log(data);
      this.setState({ profiles: data.data }); //this is verbose because Rails should spit out the raw array
    });
  }

  onProfileClicked(attributes) {
    this.setState({ selectedProfile: attributes });
  }

  render() {
    const { selectedProfile, profiles } = this.state;

    return (
      <main>
        <MainPage profiles={profiles} onProfileClicked={this.onProfileClicked}/>
        <button onClick={this.onPutRequest}>Put request</button>
      </main>
    );
  }
}

export default App;
