import { SET_USER_LOCATION } from './actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LOCATION:
      return action.coords;
    default:
      return state;
  }
};
