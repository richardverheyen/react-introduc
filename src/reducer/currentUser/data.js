import { GET_CURRENT_USER } from './actions';

const initialState = {
  id: '',
  type: 'profile',
  attributes: {
    image: '/img/estone.jpg',
    tagline: 'Ill have a cortado please'
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_USER:
      return action.data;
    default:
      return state;
  }
};
