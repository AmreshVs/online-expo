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

export const EVENTS = {
  url: `/api/v1/event`,
  method: 'GET',
}

export const EVENT_DETAIL = {
  url: `/api/v1/event`,
  method: 'GET',
}

export const COMPANY_DETAILS = {
  url: `/api/v1/ticket/exhibitor-company-infomration`,
  method: 'POST',
}

export const SELECT_STALL = {
  url: `/api/v1/ticket/exhibitor-stall-book`,
  method: 'POST',
}

export const SELECT_PACKAGE = {
  url: `/api/v1/ticket/exhibitor-package-select`,
  method: 'POST',
}

export const UPCOMING_EVENTS = {
  url: `/api/v1/ticket/get-orders`,
  method: 'GET',
}

export const TICKET_HISTORY = {
  url: `/api/v1/ticket/history`,
  method: 'GET',
}

export const FAVORITES = {
  url: `/api/v1/favourite`,
  method: 'GET',
}

export const ADD_FAVORITE = {
  url: `/api/v1/favourite/create?event_key=`,
  method: 'GET',
}

export const PROFILE = {
  url: `/api/v1/user/view`,
  method: 'GET',
}

export const UPDATE_PROFILE = {
  url: `/api/v1/user/update`,
  method: 'POST',
}

export const STALL_DETAIL = {
  url: `/api/v1/stall/detail`,
  method: 'POST',
}

export const STALL_BLOCKS = {
  url: `/api/v1/ticket/view-stall?event_key=`,
  method: 'GET',
}