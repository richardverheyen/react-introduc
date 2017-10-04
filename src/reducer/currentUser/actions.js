import { API_URL } from '../../constants';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const SET_USER_ID = 'SET_USER_ID';

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

      dispatch(setUserId(userId));
      dispatch(setCurrentUser(attributes));

      localStorage.setItem('currentUserId', userId);
      localStorage.setItem('currentUserAttributes', JSON.stringify(attributes));
    });
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
