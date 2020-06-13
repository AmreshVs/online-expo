import React from 'react';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return(
    <div id="event-detail">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-9">
            <div className="detailContainer text-wrap">
              <div className="card p-3 mt-3">
                <h3 className="text-success">Payment Success</h3>
                <p>Your Ticket is now confirmed and ID is #213243. Now you can enter the expo hassle free.</p>
                <Link to="" className="text-decoration-none">Back to upcoming events</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentSuccess;