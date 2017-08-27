import React, { Component } from 'react';
import './App.css';

import {Link} from 'react-router-dom'

import MainPage from './components/MainPage'
import SelectedProfile from './components/SelectedProfile'

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
        <Link to='/home'> Home </Link>
        <Link to='/profile'>Profile</Link>
      </main>
    );
  }
}

export default App;
