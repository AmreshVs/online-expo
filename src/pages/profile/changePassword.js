import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Loader from 'components/loader';
import UseAxios from 'hooks/UseAxios';
import { UPDATE_PROFILE } from 'api';
import { snackBarError, snackBarSuccess } from 'common/snackBar';
import Button from 'components/button';

const EditProfile = () => {

  let userData = localStorage.getItem('userData');
  userData = JSON.parse(userData);
  const history = useHistory();
  const [state, setState] = useState({
    loading: false,
    spinner: false
  });

  const password = React.useRef(null);
  const repassword = React.useRef(null);

  const validate = () => {
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

    return true;
  }

  const handleUpdate = async () => {
    if(validate()){
      setState({ ...state, spinner: true });
      var bodyFormData = new FormData();
      bodyFormData.set('username', userData.username);
      bodyFormData.set('city_id', userData.city.id);
      bodyFormData.set('country_id', userData.country.id);
      bodyFormData.set('email', userData.email);
      bodyFormData.set('mobile_number', userData.mobile_number);
      bodyFormData.set('country_code', '');
      bodyFormData.set('register_type', userData.register_type);
      bodyFormData.set('state_id', userData.state.id);
      bodyFormData.set('password', password.current.value);
      const response = await UseAxios(UPDATE_PROFILE, bodyFormData);
      setState({ ...state, data: response.data, spinner: false });
      if(response.status === 422){
        snackBarError('Invalid Email or Password!');
      }
      if(response.message === 'Updated successfully'){
        snackBarSuccess('Password Updated!');
        axios.defaults.headers.authorization = `Bearer ${response.data.access_token}`;
        await localStorage.setItem('userData', JSON.stringify(response.data));
        history.replace('/events');
      }
    }
  }


  return (
    state.loading === true ?
    <Loader/>
    :
    <div className="viewEvent layout">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-6">
            <div className="detailContainer text-wrap">
              <div className="pt-3 pb-3">
                <div className="card p-4 shadow-sm">
                  <div className="form-group">
                    <label htmlFor="password">New Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter New Password" ref={password} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="repassword">Re-Password</label>
                    <input type="password" className="form-control" id="repassword" placeholder="Enter Re-Password" ref={repassword} />
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
  )
}

export default EditProfile;