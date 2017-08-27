import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

/**
 * Import all page components here
 */
import App from './App';
import NearbyList from './components/NearbyList';
import SelectedProfile from './components/SelectedProfile';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default class AppRouter extends React.Component{
	render(){
  	  return(	
  	  	<BrowserRouter>
    	  	<Route path="/" component={App}>
    	    	<Route exact path="/" component={NearbyList} />
    	    	<Route path="/profile" component={SelectedProfile} />
    	  	</Route>
    	  </BrowserRouter>);
	};
}
