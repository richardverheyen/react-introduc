import React, { Component } from 'react';
import './App.css';

import MainPage from './components/MainPage'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedProfile: ''
    };
    this.onProfileClicked = this.onProfileClicked.bind(this);
  }

  onProfileClicked(attributes) {
    this.setState({ selectedProfile: attributes });
  }

  render() {
    const { selectedProfile } = this.state;

    return (
      <main>
        <MainPage onProfileClicked={this.onProfileClicked}/>
      </main>
    );
  }
}

export default App;
