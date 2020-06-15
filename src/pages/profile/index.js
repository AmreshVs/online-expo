import React from 'react';
import { Link } from 'react-router-dom';
import { Edit, Phone, User, Mail, MapPin, Map } from 'react-feather';

const Profile = () => {

  return (
    <div className="viewEvent">
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
                        <User size={20} className="mr-2" />
                        <h6>Fullname</h6>
                      </div>
                      <div className="col-sm-7">
                        <p className="text-secondary">Amresh Vs</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 d-flex">
                        <Mail size={20} className="mr-2" />
                        <h6>Email</h6>
                      </div>
                      <div className="col-sm-7">
                        <p className="text-secondary">amreshcse007@gmail.com</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 d-flex">
                        <MapPin size={20} className="mr-2" />
                        <h6>Country</h6>
                      </div>
                      <div className="col-sm-7">
                        <p className="text-secondary">India</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 d-flex">
                        <Map size={20} className="mr-2" />
                        <h6>State</h6>
                      </div>
                      <div className="col-sm-7">
                        <p className="text-secondary">Tamil Nadu</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 d-flex">
                        <Map size={20} className="mr-2" />
                        <h6>City</h6>
                      </div>
                      <div className="col-sm-7">
                        <p className="text-secondary">Coimbatore</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 d-flex">
                        <Phone size={20} className="mr-2" />
                        <h6>Mobile</h6>
                      </div>
                      <div className="col-sm-7">
                        <p className="text-secondary">+91 8675529268</p>
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