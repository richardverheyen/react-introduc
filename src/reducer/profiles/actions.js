import { API_URL } from '../../constants';

export const SET_PROFILES = 'SET_PROFILES'; //This is the constant or 'action' which is used by the reducer
//An action is a plain object describing what happened.

export function getProfiles() { //This is the action called getProfiles
  return dispatch => {//This is where redux-thunk does its magic
    fetch(`${API_URL}/profiles`)
      .then(res => res.json())
      .then(res => res.data)
      .then(profiles =>
        dispatch(setProfiles(profiles))
    );
  };
}
export function setProfiles(profiles) { //This action just passes the profiles back to the component which called it
  return {
    type: SET_PROFILES, //this refers back to the 'action type' definted above
    profiles,
  };
}