export const SET_SELECTED_PROFILE = 'SET_SELECTED_PROFILE';

export function setSelectedProfile(id) {
  console.log('profile/actions.js ran and a new profile was selected');
  return {
    type: SET_SELECTED_PROFILE,
    id
  };
}
