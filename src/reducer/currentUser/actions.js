import { getProfiles } from '../profiles/actions';
import { API_URL } from '../../constants';

export const GET_USER_LOCATION = 'GET_USER_LOCATION';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const SET_USER_ID = 'SET_USER_ID';


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

export function postCurrentUser(attributes) {
  let userId;
  return dispatch => {
    fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      mode: 'cors',
      body: JSON.stringify({
        data:{
          type: 'users',
          attributes: attributes
        }
      })
    })
    .then(res => res.json())
    .then(res => {
      userId = res.data.id;
      console.log(res);
      dispatch(setUserId(userId));
      localStorage.setItem('currentUser', JSON.stringify({
        attributes: attributes,
        id: userId
      }));
    });
    dispatch(setCurrentUser(attributes));
  }
}

export function setCurrentUser(attributes) {
  return {
    type: SET_CURRENT_USER,
    attributes
  };
}

export function setUserId(id) {
  return {
    type: SET_USER_ID,
    id
  };
}
