import { USER_DATA, AUTO_OTP_HASH, TOGGLE_THEME } from '@redux/actionCreators/commonAC';

const initialState = () => {
  return{
    userData: {},
    theme: 'light',
    autoOtpHash: ''
  }
};

const CommonDataReducer = (state = initialState(), action) => {
  switch (action.type) {
    case USER_DATA:
      return { ...state, userData: action.payload };
    case AUTO_OTP_HASH:
      return { ...state, autoOtpHash: action.payload };
    case TOGGLE_THEME:
      return { ...state, theme: action.payload === true ? 'dark' : 'light' };
    default:
      return state;
  }
};

export default CommonDataReducer;