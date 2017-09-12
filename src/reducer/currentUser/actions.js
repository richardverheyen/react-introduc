export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export function setCurrentUser(data) {
  //pass this data into the localstorage
  return {
    type: SET_CURRENT_USER,
    data
  };
}
