import { API_URL } from '../../constants';

export const SET_PROFILES = 'SET_PROFILES'; //This is the constant or 'action' which is used by the reducer
//An action is a plain object describing what happened.

export function getProfiles() { //This is the action called getProfiles
  return dispatch => {//This is where redux-thunk does its magic
    fetch(`${API_URL}/users`) //returns a promise
      .then(res => res.json()) //convert from raw data to json
      .then(res => res.data) //
      .then(profiles => //start calling the res.data profiles and then run this function
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
