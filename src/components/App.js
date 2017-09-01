import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../App.css';

import MainPage from './MainPage'
import SelectedProfile from './SelectedProfile'

class App extends Component {

  render() {
    return (
      <main id="app">
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route path='/profile' component={SelectedProfile}/>
        </Switch>
      </main>
    );
  }
}

export default App;
