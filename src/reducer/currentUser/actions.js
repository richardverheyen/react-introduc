import { getProfiles } from '../profiles/actions';

export const GET_USER_LOCATION = 'GET_USER_LOCATION';
export const SET_USER_LOCATION = 'SET_USER_LOCATION';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';


export function getUserLocation() {
  console.log('getting user location');
  let coords = {};
  return dispatch => {
    navigator.geolocation.getCurrentPosition(pos => {
      coords = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      };
      dispatch(setUserLocation(coords));
      dispatch(getProfiles());
      localStorage.setItem('coords', coords);
      console.log(coords);
    });
  };
};

export function setUserLocation(coords) {
  return {
    type: SET_USER_LOCATION,
    coords
  };
}

export function setCurrentUser(attributes) {
  return {
    type: SET_CURRENT_USER,
    attributes
  }
}
