export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export function setCurrentUser(data) {
  window.localStorage.setItem('currentUser', JSON.stringify(data));
  console.log(data);
  return {
    type: SET_CURRENT_USER,
    data
  };
}
