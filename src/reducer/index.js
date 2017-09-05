import { combineReducers } from 'redux';
import profiles from './profiles';
import selectedProfile from './selectedProfile';

export default combineReducers({
  profiles,
  selectedProfile,
  currentUser
});
