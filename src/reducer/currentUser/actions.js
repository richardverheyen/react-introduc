export const GET_USER_LOCATION = 'GET_USER_LOCATION';
export const SET_USER_LOCATION = 'SET_USER_LOCATION';


export function getUserLocation() {
  console.log('getting user location');
  let coords = {};
  return dispatch => {
    navigator.geolocation.getCurrentPosition(pos => {
      coords = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      };
      dispatch(setUserLocation(coords));
      console.log(coords);
    });
  };
};

export function setUserLocation(coords) {
  console.log('you made it!')
  return {
    type: SET_USER_LOCATION,
    coords,
  };
}
