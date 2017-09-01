import { SET_SELECTED_PROFILE } from './actions';

const initialState = 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_PROFILE:
      return action.id;
    default:
      return state;
  }
};
