import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Heart } from 'react-feather';

const Tickets = () => {

  const history = useHistory();

  const handlePay = () => {
    history.push('/payment-confirmation');
  }

  const handleFavourite = () => {
    
  }

  return (
    <div className="tickets">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-9">
            <div className="text-wrap">
              <div className="pt-3 pb-3">
                <div className="card p-3 shadow-sm">
                  <h5>Ticket History</h5>
                  <div className="row">
                    <div className="col-sm-5 mb-2">
                      <div className="row">
                        <div className="col-sm-3 col-4 pr-0 mr-0 d-flex align-items-center justify-content-center">
                          <Link to="/view-event">
                            <img className="card-img" src={require('../../assets/img/ticket-icon.png')} alt="event" />
                          </Link>
                        </div>
                        <div className="col-sm-9 pl-0 col-6">
                          <Link to="/view-event">
                            <h5 className="card-title mb-1">Event title</h5>
                            <h6 className="text-secondary mb-0">₹14,999</h6>
                            <p className="card-text mb-0"><small className="text-muted">3rd Nov 2020</small></p>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-5 mb-2">
                      <div className="row">
                        <div className="col-sm-3 col-4 pr-0 mr-0 d-flex align-items-center justify-content-center">
                          <Link to="/view-event">
                            <img className="card-img" src={require('../../assets/img/ticket-icon.png')} alt="event" />
                          </Link>
                        </div>
                        <div className="col-sm-9 pl-0 col-6">
                          <Link to="/view-event">
                            <h5 className="card-title mb-1">Event title</h5>
                            <h6 className="text-secondary mb-0">₹14,999</h6>
                            <p className="card-text mb-0"><small className="text-muted">3rd Nov 2020</small></p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-5 mb-2">
                      <div className="row">
                        <div className="col-sm-3 col-4 pr-0 mr-0 d-flex align-items-center justify-content-center">
                          <Link to="/view-event">
                            <img className="card-img" src={require('../../assets/img/ticket-icon.png')} alt="event" />
                          </Link>
                        </div>
                        <div className="col-sm-9 pl-0 col-6">
                          <Link to="/view-event">
                            <h5 className="card-title mb-1">Event title</h5>
                            <h6 className="text-secondary mb-0">₹14,999</h6>
                            <p className="card-text mb-0"><small className="text-muted">3rd Nov 2020</small></p>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-5 mb-2">
                      <div className="row">
                        <div className="col-sm-3 col-4 pr-0 mr-0 d-flex align-items-center justify-content-center">
                          <Link to="/view-event">
                            <img className="card-img" src={require('../../assets/img/ticket-icon.png')} alt="event" />
                          </Link>
                        </div>
                        <div className="col-sm-9 pl-0 col-6">
                          <Link to="/view-event">
                            <h5 className="card-title mb-1">Event title</h5>
                            <h6 className="text-secondary mb-0">₹14,999</h6>
                            <p className="card-text mb-0"><small className="text-muted">3rd Nov 2020</small></p>
                          </Link>
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
    </div>
  )
}

export default Tickets;