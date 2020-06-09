import React from 'react';
import { useHistory } from 'react-router-dom';

const EventDetail = () => {

  const history = useHistory();
  const handleBuyTicket = () => {
    history.push('/exhibitor/buy-ticket');
  }

  return(
    <div className="layout" id="event-detail">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 pt-3 pb-3">
            <div className="detailContainer text-wrap shadow-sm">
              <img className="image" src="https://www.onlineexpo.com/site/assets/files/1033/onlineexpo-house-1.1920x1080.jpg" alt="online-expo" />
              <div className="p-3">
                <h1>Event Title</h1>
                <p>description</p>
                <button className="btn btn-primary" onClick={handleBuyTicket}>Buy Ticket</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetail;