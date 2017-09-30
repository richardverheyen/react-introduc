import { getProfiles } from '../profiles/actions';

export const GET_USER_LOCATION = 'GET_USER_LOCATION';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';


export function getUserLocation() {
  console.log('getting user location');
  return dispatch => {
    navigator.geolocation.getCurrentPosition(pos => {
      let coords = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      };
      localStorage.setItem('coords', coords);
      console.log({coords});
      dispatch(getProfiles(coords));
    });
  };
};

export function setCurrentUser(attributes) {
  return {
    type: SET_CURRENT_USER,
    attributes
  }
}
