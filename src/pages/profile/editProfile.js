import React from 'react';
import IntlTelInput from 'react-bootstrap-intl-tel-input'
import { Typeahead } from 'react-bootstrap-typeahead'; 
import { useHistory } from 'react-router-dom';

import { countries } from '../register/countryStatic';

const EditProfile = () => {

  const [type, setType] = React.useState('visitor');
  const [country, setCountry] = React.useState([]);
  const [state, setState] = React.useState([]);
  const [city, setCity] = React.useState([]);
  const register = React.useRef(null);
  const companyName = React.useRef(null);
  const companyEmail = React.useRef(null);
  const fullName = React.useRef(null);
  const email = React.useRef(null);
  const mobileNumber = React.useRef(null);
  const history = useHistory();

  const handleUpdate = () => {
    history.goBack();
  }

  return (
    <div className="viewEvent">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-6">
            <div className="detailContainer text-wrap">
              <div className="pt-3 pb-3">
                <div className="card p-4 shadow-sm">
                  {type === 'Exhibitor' ? 
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
                  {type === 'Exhibitor' ? 
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
                    <label htmlFor="Country">Country</label>
                    <Typeahead id="Country" labelKey="name" multiple={false} onChange={setCountry} options={countries} placeholder="Choose a country" selected={country}  />
                  </div>
                  <div className="form-group">
                    <label htmlFor="State">State</label>
                    <Typeahead id="State" labelKey="name" multiple={false} onChange={setState} options={countries} placeholder="Choose a state" selected={state}  />
                  </div>
                  <div className="form-group">
                    <label htmlFor="City">City</label>
                    <Typeahead id="City" labelKey="name" multiple={false} onChange={setCity} options={countries} placeholder="Choose a state..." selected={city}  />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Country">Mobile Number</label>
                    <IntlTelInput preferredCountries={['IN', 'GB']} defaultCountry={'IN'} onChange={(data) => console.log(data)} ref={mobileNumber} />
                  </div>
                  <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update</button>
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