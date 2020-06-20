import { API_URL } from '../constants';

export const LOGIN = {
  url: `${API_URL}/user/otp-login`,
  method: 'POST',
}

export const GET_COUNTRY = {
  url: `${API_URL}/address/get-country`,
  method: 'GET',
}

export const GET_STATE = {
  url: `${API_URL}/address/get-state?id=`,
  method: 'GET',
}

export const GET_CITY = {
  url: `${API_URL}/address/get-city?id=`,
  method: 'GET',
}

export const REGISTER = {
  url: `${API_URL}/user/register`,
  method: 'POST',
}

export const VERIFY_OTP = {
  url: `${API_URL}/user/verify_otp`,
  method: 'POST',
}

export const EVENTS = {
  url: `${API_URL}/event`,
  method: 'GET',
}

export const EVENT_DETAIL = {
  url: `${API_URL}/event`,
  method: 'GET',
}

export const COMPANY_DETAILS = {
  url: `${API_URL}/ticket/exhibitor-company-infomration`,
  method: 'POST',
}

export const SELECT_STALL = {
  url: `${API_URL}/ticket/exhibitor-stall-book`,
  method: 'POST',
}

export const SELECT_PACKAGE = {
  url: `${API_URL}/ticket/exhibitor-package-select`,
  method: 'POST',
}

export const UPCOMING_EVENTS = {
  url: `${API_URL}/ticket/get-orders`,
  method: 'GET',
}

export const TICKET_HISTORY = {
  url: `${API_URL}/ticket/history`,
  method: 'GET',
}

export const FAVORITES = {
  url: `${API_URL}/favourite`,
  method: 'GET',
}

export const ADD_FAVORITE = {
  url: `${API_URL}/favourite/create?event_key=`,
  method: 'GET',
}

export const PROFILE = {
  url: `${API_URL}/user/view`,
  method: 'GET',
}

export const UPDATE_PROFILE = {
  url: `${API_URL}/user/update`,
  method: 'POST',
}

export const STALL_DETAIL = {
  url: `${API_URL}/ticket/view-stall-details?ticket_key=`,
  method: 'GET',
}

export const STALL_BLOCKS = {
  url: `${API_URL}/ticket/view-stall?event_key=`,
  method: 'GET',
}

export const UPDATE_STALL_DETAIL = {
  url: `${API_URL}/ticket/update-stall-details`,
  method: 'POST',
}

export const VISITOR_PACKAGE = {
  url: `${API_URL}/ticket/visitor-package-select`,
  method: 'POST',
}