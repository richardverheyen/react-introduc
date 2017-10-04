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
    let latLng = {lat: 3, lng: 1};
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(position => {
        latLng = {lat: position.coords.latitude, lng: position.coords.longitude};
        mapbox(latLng);
      });
    } else {
      console.warn('This browser does not support HTML5 geolocation.');
    }
  }
}

export default UserLocation;
