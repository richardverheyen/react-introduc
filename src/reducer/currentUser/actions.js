export const GET_CURRENT_USER = 'GET_CURRENT_USER';

export function getCurrentUser(data) {
  return {
    type: GET_CURRENT_USER,
    data
  };
}
