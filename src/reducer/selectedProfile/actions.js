export const SET_SELECTED_PROFILE = 'SET_SELECTED_PROFILE';

export function setSelectedProfile(data) {
  return {
    type: SET_SELECTED_PROFILE,
    data
  };
}
