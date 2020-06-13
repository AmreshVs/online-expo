import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const YourEvents = () => {

  const history = useHistory();

  const handlePay = () => {
    history.push('/payment-confirmation');
  }

  return (
    <div className="yourEvents">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-9">
            <div className="detailContainer text-wrap">
              <div className="pt-3 pb-3">
                <div className="card p-3 shadow-sm">
                  <h5>Your Upcoming Events</h5>
                  <Link to="/view-event">
                    <div className="row">
                      <div className="col-sm-3 col-4">
                        <img className="card-img" src="https://www.onlineexpo.com/site/assets/files/1033/onlineexpo-house-1.1920x1080.jpg" alt="event" />
                      </div>
                      <div className="col-sm-9 pl-0 col-8">
                        <h5 className="card-title mb-0">Event title</h5>
                        <p className="card-text"><small className="text-muted">3rd Nov 2020 - 2nd Apr 2021</small></p>
                      </div>
                    </div>
                  </Link>
                  <div className="divider" />
                  <Link to="/view-event">
                    <div className="row">
                      <div className="col-sm-3 col-4">
                        <img className="card-img" src="https://www.onlineexpo.com/site/assets/files/1033/onlineexpo-house-1.1920x1080.jpg" alt="event" />
                      </div>
                      <div className="col-sm-9 pl-0 col-8">
                        <h5 className="card-title mb-0">Event title</h5>
                        <p className="card-text"><small className="text-muted">3rd Nov 2020 - 2nd Apr 2021</small></p>
                      </div>
                    </div>
                  </Link>
                  <div className="divider" />
                  <Link to="/view-event">
                    <div className="row">
                      <div className="col-sm-3 col-4">
                        <img className="card-img" src="https://www.onlineexpo.com/site/assets/files/1033/onlineexpo-house-1.1920x1080.jpg" alt="event" />
                      </div>
                      <div className="col-sm-9 pl-0 col-8">
                        <h5 className="card-title mb-0">Event title</h5>
                        <p className="card-text"><small className="text-muted">3rd Nov 2020 - 2nd Apr 2021</small></p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YourEvents;