import { API_URL } from '../../constants';

export const SET_PROFILES = 'SET_PROFILES'; //This is the constant or 'action' which is used by the reducer
//An action is a plain object describing what happened.

export function getUserLocation(id) {
  return dispatch => {
    navigator.geolocation.getCurrentPosition(pos => {
      let coords = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      };
      localStorage.setItem('coords', JSON.stringify(coords));
      dispatch(getProfiles(coords, id));
    });
  };
};

export function getProfiles(coords, id) { //This is the action called getProfiles
  return dispatch => {// This is where redux-thunk allows for async functions inside actions
    fetch(`${API_URL}/users/${id}`, {
      method: 'PUT',
      headers: {"Content-Type": "application/json"},
      mode: 'cors',
      body: JSON.stringify({
        data:{
          attributes: coords
        }
      })
    })
    .then(res => res.json())
    .then(res => dispatch(setProfiles(res.data)));
  };
}
export function setProfiles(data) { //This action just passes the profiles back to the component which called it
  return {
    type: SET_PROFILES, //this refers back to the 'action type' defined above
    data
  };
}
