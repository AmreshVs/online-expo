import { API_URL } from '../constants';

export const LOGIN = {
  url: `/api/v1/user/otp-login`,
  method: 'POST',
}

export const GET_COUNTRY = {
  url: `/api/v1/address/get-country`,
  method: 'GET',
}

export const GET_STATE = {
  url: `/api/v1/address/get-state?id=`,
  method: 'GET',
}

export const GET_CITY = {
  url: `/api/v1/address/get-city?id=`,
  method: 'GET',
}

export const REGISTER = {
  url: `/api/v1/user/register`,
  method: 'POST',
}

export const VERIFY_OTP = {
  url: `/api/v1/user/verify_otp`,
  method: 'POST',
}