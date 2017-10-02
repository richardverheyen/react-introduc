import { SET_USER_ID } from './actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_ID:
      return action.id;
    default:
      return state;
  }
};
