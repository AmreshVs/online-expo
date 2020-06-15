import { USER_DATA, AUTO_OTP_HASH, TOGGLE_THEME } from '@redux/actionCreators/commonAC';
import AsyncStorage from '@react-native-community/async-storage';

export const setUserData = (payload) => {
  return {
    type: USER_DATA,
    payload
  };
};


export const setAutoOtpHash = (payload) => {
  return {
    type: AUTO_OTP_HASH,
    payload
  };
};

export const toggleTheme = (payload) => {
  async function setItem(){
    let theme = payload === true ? 'dark' : 'light';
    await AsyncStorage.setItem('@ValarTamil:theme', theme);
  }
  setItem();
  return {
    type: TOGGLE_THEME,
    payload
  };
};