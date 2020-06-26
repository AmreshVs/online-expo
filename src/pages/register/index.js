import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IntlTelInput from 'react-bootstrap-intl-tel-input'
import { Typeahead } from 'react-bootstrap-typeahead'; 
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import Loader from 'components/loader';
import UseAxios from 'hooks/UseAxios';
import { GET_COUNTRY, GET_STATE, GET_CITY, REGISTER, VERIFY_OTP } from 'api';
import { snackBarError, snackBarSuccess } from 'common/snackBar';
import { mobileValidation, emailValidation } from 'common/validation';
import Button from 'components/button';
import { setUserData } from 'redux/actions/commonActions';

const Register = (props) => {

  const history = useHistory();
  const [state, setState] = useState({
    type: 'none',
    country: [],
    countries: [],
    states: [],
    cities: [],
    cstate: [],
    city: [],
    data: [],
    selected: [],
    countryCode: '',
    mobile: '',
    loading: true,
    spinner: false
  });

  const [resendOtp, setResendOtp] = useState(60);

  const [slideAnimation, setSlideAnimation] = useState({
    left: { transition: 'all .3s', transform: 'translate(0px, 0px)' },
    right: { transition: 'all .3s', transform: 'translate(-1200px, 0px)' }
  });

  const register = React.useRef(null);
  const companyName = React.useRef(null);
  const companyEmail = React.useRef(null);
  const fullName = React.useRef(null);
  const email = React.useRef(null);
  const password = React.useRef(null);
  const repassword = React.useRef(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await UseAxios(GET_COUNTRY);
    setState({ ...state, countries: response.data, loading: false });
  }

  const handleCountry = async (value) => {
    if(value[0] !== undefined){
      setState({ ...state, country: value });
      const response = await UseAxios({ ...GET_STATE, url: GET_STATE.url + value[0].id });
      setState({ ...state, states: response.data, country: value, cstate: [] });
    }
    else{
      setState({ ...state, country: value });
    }
  }

  const handleCity = (value) => {
      setState({ ...state, city: value });
  }

  const handleState = async (value) => {
    if(value[0] !== undefined){
      setState({ ...state, cstate: value });
      const response = await UseAxios({ ...GET_CITY, url: GET_CITY.url + value[0].id });
      setState({ ...state, cities: response.data, cstate: value, city: [] });
    }
    else{
      setState({ ...state, cstate: value });
    }
  }

  const handleChange = (type) => {
    setState({ ...state, type: type });
  }

  const handleMobileInput = (mobile) => {
    setState({ ...state, mobile: mobile.phoneNumber, countryCode: mobile.callingCode });
  }

  const validate = () => {
    if(state.type === 'Exhibitor' && companyName.current.value === ''){
      snackBarError('Company Name cannot be empty!');
      return false;
    }

    if(state.type === 'Exhibitor' && companyEmail.current.value === ''){
      snackBarError('Company Email cannot be empty!');
      return false;
    }

    if(state.type === 'Visitor' && fullName.current.value === ''){
      snackBarError('Fullname cannot be empty!');
      return false;
    }

    if(state.type === 'Visitor' && email.current.value === ''){
      snackBarError('Email cannot be empty!');
      return false;
    }

    if(password.current.value === ''){
      snackBarError('Password cannot be empty!');
      return false;
    }

    if(repassword.current.value === ''){
      snackBarError('Re-Password cannot be empty');
      return false;
    }

    if(password.current.value !== repassword.current.value){
      snackBarError('Passwords dont match!');
      return false;
    }

    if(state.country.length === 0){
      snackBarError('You must select country!');
      return false;
    }

    if(state.cstate.length === 0){
      snackBarError('You must select state!');
      return false;
    }

    if(state.city.length === 0){
      snackBarError('You must select city!');
      return false;
    }

    if(state.mobile === ''){
      snackBarError('Mobile Number cannot be empty!');
      return false;
    }

    if(state.mobile !== ''){
      return mobileValidation(state.mobile);
    }

    if(email.current.value !== ''){
      emailValidation(email.current.value);
    }

    return true;
  }

  const handleNext = async () => {
    if(validate()){
      let mobNum = state.mobile.split(' ').join('');
      setState({ ...state, spinner: true });
      var bodyFormData = new FormData();
      bodyFormData.set('username', state.type === 'Exhibitor' ? companyName.current.value : fullName.current.value);
      bodyFormData.set('city_id', Number(state.city[0].id));
      bodyFormData.set('country_id', Number(state.country[0].id));
      bodyFormData.set('email', state.type === 'Exhibitor' ? companyEmail.current.value : email.current.value);
      bodyFormData.set('mobile_number', Number(mobNum));
      bodyFormData.set('password', password.current.value);
      bodyFormData.set('country_code', state.countryCode);
      bodyFormData.set('register_type', register.current.value === 'Visitor' ? 2 : 1);
      bodyFormData.set('state_id', Number(state.cstate[0].id));
      const response = await UseAxios(REGISTER, bodyFormData);
      if(response.status === 200){
        axios.defaults.headers.authorization = `Bearer ${response.data.access_token}`;
        localStorage.setItem('userData', JSON.stringify(response.data));
        props.setUserData(response.data);
        snackBarSuccess('Register Successfull');
        history.replace('/events');
      }
      else{
        snackBarError(response.message);
      }
      setState({ ...state, data: response.data, spinner: false });
    }
  }

  return (
    state.loading === true ?
    <Loader/>
    :
    <div className="layout registerContainer">
      <div className="container p-3">
        <div className="row justify-content-center">
          <div className="col-sm-6 registerContainer">
            <div className="position-relative">
              <div className='card shadow-sm'>
                <div className="text-center mb-3">
                  <img className="login-img" src={require('../../assets/img/register.png')} alt="login" />
                </div>
                <div className="form-group">
                  <label htmlFor="registerAs">Register as</label>
                  <select className="form-control" id="registerAs" onChange={(e) => handleChange(e.target.value)} ref={register}>
                    <option value="none">Select</option>
                    <option>Visitor</option>
                    <option>Exhibitor</option>
                  </select>
                </div>
                {state.type !== 'none' ?
                <>
                  {state.type === 'Exhibitor' ? 
                    <div className="form-group">
                      <label htmlFor="companyName">Company Name</label>
                      <input type="text" className="form-control" id="companyName" placeholder="Enter company name" ref={companyName} />
                    </div>
                  :
                    <div className="form-group">
                      <label htmlFor="fullName">Fullname</label>
                      <input type="text" className="form-control" id="fullName" placeholder="Enter fullname" ref={fullName} />
                    </div>
                  }
                  {state.type === 'Exhibitor' ? 
                    <div className="form-group">
                      <label htmlFor="companyEmail">Company Email</label>
                      <input type="email" className="form-control" id="companyEmail" placeholder="Enter company email" ref={companyEmail} />
                    </div>
                  :
                    <div className="form-group">
                      <label htmlFor="userEmail">Email</label>
                      <input type="email" className="form-control" id="userEmail" placeholder="Enter email" ref={email} />
                    </div>
                  }
                  <div className="form-group">
                    <label htmlFor="Country">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter Password" ref={password} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Country">Re-Password</label>
                    <input type="password" className="form-control" id="repassword" placeholder="Re-Type Password" ref={repassword} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Country">Country</label>
                    <Typeahead id="Country" labelKey="name" multiple={false} onChange={handleCountry} options={state.countries} placeholder="Choose a country" selected={state.country}  />
                  </div>
                  <div className="form-group">
                    <label htmlFor="State">State</label>
                    <Typeahead id="State" labelKey="name" multiple={false} onChange={handleState} options={state.states} placeholder="Choose a state" selected={state.cstate}  />
                  </div>
                  <div className="form-group">
                    <label htmlFor="City">City</label>
                    <Typeahead id="City" labelKey="name" multiple={false} onChange={handleCity} options={state.cities} placeholder="Choose a city" selected={state.city}  />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Country">Mobile Number</label>
                    <IntlTelInput preferredCountries={['IN', 'GB']} defaultCountry={'IN'} onChange={handleMobileInput} />
                  </div>
                  <Button className="btn btn-primary" onClick={handleNext} loading={state.spinner}>
                    Submit
                  </Button>
                </>
                : null
              }
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);