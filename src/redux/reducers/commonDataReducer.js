import { USER_DATA } from 'redux/actionCreators/commonAC';

const initialState = () => {
  return{
    userData: {},
  }
};

const CommonDataReducer = (state = initialState(), action) => {
  switch (action.type) {
    case USER_DATA:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
};

export default CommonDataReducer;