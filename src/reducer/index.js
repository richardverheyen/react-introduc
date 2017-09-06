import { combineReducers } from 'redux';
import profiles from './profiles';
import selectedProfile from './selectedProfile';
import currentUser from './currentUser';

export default combineReducers({
  profiles,
  selectedProfile,
  currentUser
});
