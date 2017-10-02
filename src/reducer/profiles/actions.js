import { API_URL } from '../../constants';

export const SET_PROFILES = 'SET_PROFILES'; //This is the constant or 'action' which is used by the reducer
//An action is a plain object describing what happened.

export function getProfiles(coords) { //This is the action called getProfiles

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  let data = JSON.stringify({
    data:{
      attributes: coords
    }
  });


  return dispatch => {// This is where redux-thunk allows for async functions inside actions
    fetch(`${API_URL}/users/1`, {
        method: 'PUT',
        headers: myHeaders,
        mode: 'cors',
        body: data
      }) //returns a promise
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
