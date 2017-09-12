import React, { Component } from 'react';

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

        let map = new window.google.maps.Map(document.getElementById('map'), {
          center: latLng,
          disableDefaultUI: true,
          zoom: 18
        });
        let cityCircle = new window.google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 0.5,
            fillColor: '#FF0000',
            fillOpacity: 0.1,
            map: map,
            center: latLng,
            radius: 30
          });
      });
    } else {
      console.warn('This browser does not support HTML5 geolocation.');
    }

  }
}



export default UserLocation;
