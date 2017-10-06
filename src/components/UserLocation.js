import React, { Component } from 'react';
import { mapbox } from './Mapbox';


class UserLocation extends Component {

  render() {
    return(
      <div id="map-wrapper">
        <div id="map"></div>
      </div>
    )
  }

  componentDidMount() {
    let latLng = JSON.parse(localStorage.getItem('coords'));
    mapbox(latLng);
  }
}

export default UserLocation;
