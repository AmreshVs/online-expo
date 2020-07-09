/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead'; 
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Loader from 'components/loader';
import UseAxios from 'hooks/UseAxios';
import { GET_COUNTRY, GET_STATE, GET_CITY, UPDATE_PROFILE } from 'api';
import { snackBarError, snackBarSuccess } from 'common/snackBar';
import { mobileValidation, emailValidation } from 'common/validation';
import Button from 'components/button';
import OverlayLoader from 'components/overlayLoader';

const EditProfile = () => {

  let userData = localStorage.getItem('userData');
  userData = JSON.parse(userData);
  let type = Number(userData.register_type);

  const history = useHistory();
  const [state, setState] = useState({
    country: [userData.country],
    countries: [],
    states: [],
    cities: [],
    cstate: [userData.state],
    city: [userData.city],
    data: [],
    selected: [],
    countryCode: '',
    mobile: userData.mobile_number,
    loading: true,
    overlay: false,
    spinner: false
  });

  const companyName = React.useRef(null);
  const companyEmail = React.useRef(null);
  const fullName = React.useRef(null);
  const email = React.useRef(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await UseAxios(GET_COUNTRY);
    const response1 = await UseAxios({ ...GET_STATE, url: GET_STATE.url + userData.country.id });
    const response2 = await UseAxios({ ...GET_CITY, url: GET_CITY.url + userData.state.id });
    setState({ ...state, countries: response.data, states: response1.data, cities: response2.data, loading: false });
  }

  const handleCountry = async (value) => {
    if(value[0] !== undefined){
      setState({ ...state, country: value, overlay: true });
      const response = await UseAxios({ ...GET_STATE, url: GET_STATE.url + value[0].id });
      setState({ ...state, states: response.data, country: value, cstate: [], mobile: '+' + value[0].phonecode, overlay: false });
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
      setState({ ...state, cstate: value, overlay: true });
      const response = await UseAxios({ ...GET_CITY, url: GET_CITY.url + value[0].id });
      setState({ ...state, cities: response.data, cstate: value, city: [], overlay: false });
    }
    else{
      setState({ ...state, cstate: value });
    }
  }

  const validate = () => {
    if(type === 1 && companyName.current.value === ''){
      snackBarError('Company Name cannot be empty!');
      return false;
    }

    if(type === 1 && companyEmail.current.value === ''){
      snackBarError('Company Email cannot be empty!');
      return false;
    }

    if(type === 2 && fullName.current.value === ''){
      snackBarError('Fullname cannot be empty!');
      return false;
    }

    if(state.type === 2 && email.current.value === ''){
      snackBarError('Email cannot be empty!');
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

  const handleUpdate = async () => {
    if(validate()){
      setState({ ...state, spinner: true });
      var bodyFormData = new FormData();
      bodyFormData.set('username', fullName.current.value);
      bodyFormData.set('city_id', Number(state.city[0].id));
      bodyFormData.set('country_id', Number(state.country[0].id));
      bodyFormData.set('email', email.current.value);
      bodyFormData.set('mobile_number', state.mobile);
      bodyFormData.set('password', '');
      bodyFormData.set('country_code', state.countryCode);
      bodyFormData.set('register_type', userData.register_type);
      bodyFormData.set('state_id', Number(state.cstate[0].id));
      const response = await UseAxios(UPDATE_PROFILE, bodyFormData);
      setState({ ...state, data: response.data, spinner: false });
      if(response.message === 'Updated successfully'){
        snackBarSuccess('Profile Updated!');
        axios.defaults.headers.authorization = `Bearer ${response.data.access_token}`;
        localStorage.setItem('userData', JSON.stringify(response.data));
        history.goBack();
      }
    }
  }

  return (
    state.loading === true ?
    <Loader/>
    :
    <>
      <OverlayLoader loading={state.overlay} />
      <div className="viewEvent layout">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-lg-6">
              <div className="detailContainer text-wrap">
                <div className="pt-3 pb-3">
                  <div className="card p-4 shadow-sm">
                    <div className="row justify-content-center">
                      <div className="col-12 col-lg-9 mb-3">
                        <img className="w-100" src={require('../../assets/img/profile.jpg')} alt="profile" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="companyName">{type === 1 ? 'Company Name' : 'Fullname'}</label>
                      <input type="text" className="form-control" id="companyName" placeholder="Enter name" defaultValue={userData.username} ref={fullName} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="companyEmail">{type === 1 ? 'Company Email' : 'Email'}</label>
                      <input type="email" className="form-control" id="companyEmail" placeholder="Enter email" defaultValue={userData.email} ref={email} />
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
                      <input type="text" className="form-control" value={state.mobile} onChange={(e) => setState({ ...state, mobile: e.target.value })} />
                    </div>
                    <Button className="btn btn-primary" onClick={handleUpdate} loading={state.spinner}>
                      Update
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditProfile;