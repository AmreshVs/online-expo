import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Heart } from 'react-feather';

const Favourites = () => {

  const history = useHistory();

  const handlePay = () => {
    history.push('/payment-confirmation');
  }

  const handleFavourite = () => {
    
  }

  return (
    <div className="yourEvents">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-9">
            <div className="detailContainer text-wrap">
              <div className="pt-3 pb-3">
                <div className="card p-3 shadow-sm">
                  <h5>Your Favorite Events</h5>
                  <div className="row">
                    <div className="col-sm-3 col-4">
                      <Link to="/view-event">
                        <img className="card-img" src="https://www.onlineexpo.com/site/assets/files/1033/onlineexpo-house-1.1920x1080.jpg" alt="event" />
                      </Link>
                    </div>
                    <div className="col-sm-8 pl-0 col-6">
                      <Link to="/view-event">
                        <h5 className="card-title mb-0">Event title</h5>
                        <p className="card-text mb-1"><small className="text-muted">3rd Nov 2020 - 2nd Apr 2021</small></p>
                      </Link>
                    </div>
                    <div className="col-sm-1 col-2">
                      <div className="heartContainer pt-0" onClick={handleFavourite}>
                        <Heart color="white" fill="red" />
                      </div>
                    </div>
                  </div>
                  <div className="divider" />
                  <div className="row">
                    <div className="col-sm-3 col-4">
                      <Link to="/view-event">
                        <img className="card-img" src="https://www.onlineexpo.com/site/assets/files/1033/onlineexpo-house-1.1920x1080.jpg" alt="event" />
                      </Link>
                    </div>
                    <div className="col-sm-8 pl-0 col-6">
                      <Link to="/view-event">
                        <h5 className="card-title mb-0">Event title</h5>
                        <p className="card-text mb-1"><small className="text-muted">3rd Nov 2020 - 2nd Apr 2021</small></p>
                      </Link>
                    </div>
                    <div className="col-sm-1 col-2">
                      <div className="heartContainer pt-0" onClick={handleFavourite}>
                        <Heart color="white" fill="red" />
                      </div>
                    </div>
                  </div>
                  <div className="divider" />
                  <div className="row">
                    <div className="col-sm-3 col-4">
                      <Link to="/view-event">
                        <img className="card-img" src="https://www.onlineexpo.com/site/assets/files/1033/onlineexpo-house-1.1920x1080.jpg" alt="event" />
                      </Link>
                    </div>
                    <div className="col-sm-8 pl-0 col-6">
                      <Link to="/view-event">
                        <h5 className="card-title mb-0">Event title</h5>
                        <p className="card-text mb-1"><small className="text-muted">3rd Nov 2020 - 2nd Apr 2021</small></p>
                      </Link>
                    </div>
                    <div className="col-sm-1 col-2">
                      <div className="heartContainer pt-0" onClick={handleFavourite}>
                        <Heart color="white" fill="red" />
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

export default Favourites;