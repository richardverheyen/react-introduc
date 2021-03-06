import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import App from './App';
import NearbyPage from './components/NearbyPage';
import SelectedProfile from './components/SelectedProfile';
import CurrentUser from './components/CurrentUser';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={NearbyPage} />
    <Route path="/profile" component={SelectedProfile} />
    <Route path="/user" component={CurrentUser} />
  </Route>
);
