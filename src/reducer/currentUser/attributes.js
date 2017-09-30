import { SET_CURRENT_USER } from './actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.attributes;
    default:
      return state;
  }
};
