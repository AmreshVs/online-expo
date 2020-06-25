import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import UseAxios from 'hooks/UseAxios';
import { LOGIN, FORGOT_PASSWORD } from 'api';
import { snackBarError } from 'common/snackBar';
import Button from 'components/button';
import { setUserData } from 'redux/actions/commonActions';
import { useHistory, Link } from 'react-router-dom';

const Login = (props) => {

  const history = useHistory();
  const [spinner, setSpinner] = React.useState(false);
  const [slideAnimation, setSlideAnimation] = React.useState({
    left: { transition: 'all .3s', transform: 'translate(0px, 0px)' },
    right: { transition: 'all .3s', transform: 'translate(-1200px, 0px)' }
  });
  const email = React.useRef(null);
  const password = React.useRef(null);


  const handleNext = async () => {
    if(email.current.value === ''){
      snackBarError('Email cannot be empty!');
      email.current.focus();
    }
    else{
      var bodyFormData = new FormData();
      bodyFormData.set('email', email.current.value);
      const response = await UseAxios(FORGOT_PASSWORD, bodyFormData);
      if(response.status === 200){
        setSlideAnimation({ right: { ...slideAnimation.right, transform: 'translate(0px, 0px)'}, left: { ...slideAnimation.left, transform: 'translate(-1200px, 0px)'} });
      }
      else{
        snackBarError('Email Not sent!');
      }
    }
  }

  const handleBack = () => {
    setSlideAnimation({ right: { ...slideAnimation.right, transform: 'translate(-1200px, 0px)'}, left: { ...slideAnimation.left, transform: 'translate(0px, 0px)'} });
  }

  const handleSubmit = async () => {
    if(validate()){
      var bodyFormData = new FormData();
      bodyFormData.set('password', password.current.value);
      bodyFormData.set('username', email.current.value);
      setSpinner(true);
      const response = await UseAxios(LOGIN, bodyFormData);
      setSpinner(false);
      if(response.message === 'Logged in successfully'){
        axios.defaults.headers.authorization = `Bearer ${response.data.access_token}`;
        localStorage.setItem('userData', JSON.stringify(response.data) );
        props.setUserData(response.data);
        history.push('/events');
      }else{
        snackBarError(response.message);
      }
    }
  }

  const validate = () => {
    if(email.current.value === ''){
      snackBarError('Email cannot be empty!');
      return false;
    }

    if(password.current.value === ''){
      snackBarError('Password cannot be empty!');
      return false;
    }

    return true;
  }

  return (
    <div className="layout loginLayout">
      <div className="container p-3">
        <div className="row justify-content-center">
          <div className="col-sm-6 loginContainer">
            <div className="position-relative">
              <div className='card shadow-sm' style={slideAnimation.left}>
                <div className="text-center">
                  <img className="login-img" src={require('../../assets/img/login.jpg')} alt="login" />
                </div>
                <div className="form-group">
                  <label htmlFor="mobileNumber">Email Address</label>
                  <input type="email" className="form-control" id="mobileNumber" placeholder="Enter Email Address" ref={email} />
                </div>
                <div className="form-group">
                  <label htmlFor="mobileNumber">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter Password" ref={password} />
                </div>
                <Button className="btn btn-primary" onClick={handleSubmit} loading={spinner}>
                  Login
                </Button>
                <div className="form-group mt-2 mb-0 btnContainer">
                  <Link to="/register">New User?</Link>
                  <p className="link" onClick={handleNext}>Forgot Password?</p>
                </div>
              </div>
              <div className='card shadow-sm' style={slideAnimation.right}>
                <div className="text-center mb-3">
                  <img className="login-img" src={require('../../assets/img/email.jpg')} alt="login" />
                </div>
                <div className=" mb-2">
                  <div className="form-group mb-0">
                    <p>Password has been sent to your email address. Use the password from email to login and update the new password if necessary. <strong>Note:</strong> Check the email in all folders including spam </p>
                  </div>
                </div>
                <button type="button" className="btn btn-primary" onClick={handleBack}>Back</button>
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