/* eslint-disable no-useless-escape */
import { snackBarError } from './snackBar';

export const mobileValidation = (mobile) => {
  var expression = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/;

  if (mobile.length <= 0) {
    snackBarError('Enter Mobile Number');
    return false;
  }
  else if(mobile.length > 0 && !mobile.match(expression)){
    snackBarError('Enter Valid Mobile Number');
    return false;
  }
  else if(mobile.length < 10 && mobile.match(expression)){
    snackBarError('Expects atleast 10 digits');
    return false;
  }
  else{
    return true;
  }
}

export const emailValidation = (email) => {
  var expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.length <= 0) {
    snackBarError('Enter Email Address');
    return false;
  }
  else if(email.length > 0 && !email.match(expression)){
    snackBarError('Enter Valid Email Address');
    return false;
  }
  else{
    return true;
  }
}