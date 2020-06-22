import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import UseAxios from 'hooks/UseAxios';
import { LOGIN } from 'api';
import { snackBarError, snackBarSuccess } from 'common/snackBar';
import { mobileValidation } from 'common/validation';
import Button from 'components/button';
import { setUserData } from 'redux/actions/commonActions';
import { useHistory, Link } from 'react-router-dom';

const Login = (props) => {

  const history = useHistory();
  const [resendOtp, setResendOtp] = React.useState(60);
  const [otpId, setOtpId] = React.useState('');
  const [spinner, setSpinner] = React.useState(false);
  const [slideAnimation, setSlideAnimation] = React.useState({
    left: { transition: 'all .3s', transform: 'translate(0px, 0px)' },
    right: { transition: 'all .3s', transform: 'translate(-1200px, 0px)' }
  });
  const mobileNum = React.useRef(null);

  const otpRef = {
    1: React.useRef(null),
    2: React.useRef(null),
    3: React.useRef(null),
    4: React.useRef(null),
  };

  const handleNext = async () => {
    if(mobileValidation(mobileNum.current.value)){
      setSpinner(true);
      let bodyFormData = new FormData();
      bodyFormData.set('mobile_number', mobileNum.current.value);
      bodyFormData.set('otp', '');
      const response = await UseAxios(LOGIN, bodyFormData);
      setSpinner(false);
      if(response.status === 200){
        setOtpId(response.data);
        snackBarSuccess('OTP sent to your mobile number');
        setSlideAnimation({ right: { ...slideAnimation.right, transform: 'translate(0px, 0px)'}, left: { ...slideAnimation.left, transform: 'translate(-1200px, 0px)'} });
        otpRef[1].current.focus();
        runTimer();
      }
      else{
        snackBarError(response.message);
      }
    }
  }

  const runTimer = (sec = 60) => {
    let timer = setInterval(() => {
      sec -= 1;
      setResendOtp(sec);
      if(sec <= 0){
        clearInterval(timer);
      }
    }, 1000);
  }

  const handleBack = () => {
    setSlideAnimation({ right: { ...slideAnimation.right, transform: 'translate(-1200px, 0px)'}, left: { ...slideAnimation.left, transform: 'translate(0px, 0px)'} });
  }

  const handleSubmit = async () => {
    let otp = otpRef[1].current.value + otpRef[2].current.value + otpRef[3].current.value + otpRef[4].current.value
    var bodyFormData = new FormData();
    bodyFormData.set('otp', otp);
    bodyFormData.set('mobile_number', mobileNum.current.value);
    const response = await UseAxios(LOGIN, bodyFormData);
    if(response.message === 'Logged in successfully'){
      axios.defaults.headers.authorization = `Bearer ${response.data.access_token}`;
      localStorage.setItem('userData', JSON.stringify(response.data) );
      props.setUserData(response.data);
      history.push('/events');
    }else{
      snackBarError(response.message);
    }
  }

  const handleOtpChange = (e, id) => {
    if (e.target.value === ''){
      if(id !== 1){
        otpRef[id - 1].current.focus();
      }
    }
    else{
      if(id !== 4){
        otpRef[id + 1].current.focus();
      }
    }
  }

  const handleResendOtp = () => {
    runTimer();
  }

  let disableSubmit = (otpRef[1].current !== null && otpRef[1].current.value !== '') && (otpRef[2].current !== null && otpRef[2].current.value !== '')  && (otpRef[3].current !== null && otpRef[3].current.value !== '') && (otpRef[4].current !== null && otpRef[4].current.value !== '') ? false : true;

  return (
    <div className="layout">
      <div className="container p-3">
        <div className="row justify-content-center">
          <div className="col-sm-6 registerContainer">
            <div className="position-relative">
              <div className='card shadow-sm' style={slideAnimation.left}>
                <div className="text-center">
                  <img className="login-img" src={require('../../assets/img/login.jpg')} alt="login" />
                </div>
                <div className="form-group">
                  <label htmlFor="mobileNumber">Mobile Number</label>
                  <input type="tel" className="form-control" id="mobileNumber" placeholder="Enter Mobile Number" ref={mobileNum} />
                </div>
                <Button className="btn btn-primary" onClick={handleNext} loading={spinner}>
                  Next
                </Button>
                <div className="form-group mt-2 mb-0">
                  <Link to="/register">Not an member? Register Now</Link>
                </div>
              </div>
              <div className='card shadow-sm' style={slideAnimation.right}>
                <div className="text-center mb-3">
                  <img className="login-img" src={require('../../assets/img/otp.jpg')} alt="login" />
                </div>
                <div className=" mb-2">
                  <div className="form-group mb-0">
                    <div className="otpContainer">
                      <input type="text" className="form-control otpInput" onChange={(e) => handleOtpChange(e, 1)} id="otp1" maxLength={1} ref={otpRef[1]} />
                      <input type="text" className="form-control otpInput" onChange={(e) => handleOtpChange(e, 2)} id="otp2" maxLength={1} ref={otpRef[2]} />
                      <input type="text" className="form-control otpInput" onChange={(e) => handleOtpChange(e, 3)} id="otp3" maxLength={1} ref={otpRef[3]} />
                      <input type="text" className="form-control otpInput" onChange={(e) => handleOtpChange(e, 4)} id="otp4" maxLength={1} ref={otpRef[4]} />
                    </div>
                  </div>
                </div>
                <div className="resendOtpContainer mb-2">
                  {resendOtp > 0 ? 
                  <p>Resend OTP in {resendOtp}</p>
                  :
                  <button type="button" className="btn btn-link" onClick={handleResendOtp}>Resend OTP</button>
                  }
                </div>
                <div className="btnContainer">
                  <button type="button" className="btn btn-primary" onClick={handleBack}>Back</button>
                  <Button className="btn btn-primary" onClick={handleSubmit} disabled={disableSubmit} loading={spinner}>
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => state.common;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setUserData: setUserData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);