export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export function getCurrentUser() {
  let profile = JSON.parse(window.localStorage.getItem("currentUser"));
  return {
    type: GET_CURRENT_USER,
    profile
  };
}

export function setCurrentUser(profile) {
  window.localStorage.setItem('currentUser', JSON.stringify(profile));
  console.log(profile);
  return {
    type: SET_CURRENT_USER,
    profile
  };
}
