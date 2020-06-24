import React from 'react';
import { Link } from 'react-router-dom';
import { Edit, Phone, User, Mail, MapPin, Map } from 'react-feather';

import UseAxios from 'hooks/UseAxios';
import Loader from 'components/loader';
import { PROFILE } from 'api';

const Profile = () => {

  const [state, setState] = React.useState({
    loading: true,
    data: [],
  });

  React.useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setState({ ...state, loading: true });
    const response = await UseAxios(PROFILE);
    setState({ ...state, data: response.data, loading: false });
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
                <div className="card p-3 shadow-sm">
                  <div className="mb-1 text-right">
                    <Link to="/edit-profile">
                      <button className="btn btn-primary">
                        <Edit className="mr-1" size={16} />
                        Edit
                      </button>
                    </Link>
                  </div>
                  <div className="p-3">
                    <div className="row">
                      <div className="col-sm-4 d-flex">
                        <User size={20} className="mr-2" color="#4395ff" />
                        <h6>Fullname</h6>
                      </div>
                      <div className="col-sm-7">
                        <p className="text-secondary">{state.data.username}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 d-flex">
                        <Mail size={20} className="mr-2" color="#4395ff" />
                        <h6>Email</h6>
                      </div>
                      <div className="col-sm-7">
                        <p className="text-secondary">{state.data.email}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 d-flex">
                        <MapPin size={20} className="mr-2" color="#4395ff" />
                        <h6>Country</h6>
                      </div>
                      <div className="col-sm-7">
                        <p className="text-secondary">{state.data.country.name}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 d-flex">
                        <Map size={20} className="mr-2" color="#4395ff" />
                        <h6>State</h6>
                      </div>
                      <div className="col-sm-7">
                        <p className="text-secondary">{state.data.state.name}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 d-flex">
                        <Map size={20} className="mr-2" color="#4395ff" />
                        <h6>City</h6>
                      </div>
                      <div className="col-sm-7">
                        <p className="text-secondary">{state.data.city.name}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 d-flex">
                        <Phone size={20} className="mr-2" color="#4395ff" />
                        <h6>Mobile</h6>
                      </div>
                      <div className="col-sm-7">
                        <p className="text-secondary">{state.data.mobile_number}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;