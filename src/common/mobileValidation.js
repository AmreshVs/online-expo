import snackBar from './snackBar';

const mobileValidation = (mobile) => {
  var expression = /^\+([0-9]{2})\)?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

  if (mobile.length <= 0) {
    snackBar('Enter Mobile Number');
    return false;
  }
  else if(mobile.length > 0 && !mobile.match(expression)){
    snackBar('Enter Valid Mobile Number');
    return false;
  }
  else{
    return true;
  }
}

export default mobileValidation;