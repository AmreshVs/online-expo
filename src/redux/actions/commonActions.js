import { USER_DATA } from 'redux/actionCreators/commonAC';

export const setUserData = (payload) => {
  return {
    type: USER_DATA,
    payload
  };
};