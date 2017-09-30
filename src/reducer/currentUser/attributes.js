import { SET_USER_LOCATION } from './actions';
import { SET_CURRENT_USER } from './actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LOCATION:
      return action.coords;
    case SET_CURRENT_USER:
      return state;
    default:
      return state;
  }
};
