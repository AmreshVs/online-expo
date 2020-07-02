import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'; 

const PaymentSuccess = () => {
  const location = useLocation();
  // const history = useHistory();

  let data = location.state.data;

  // const handleClick = () => {
  //   history.push('/view-event', { key: data.event_key, title: data.event_name, ticket_key: data.ticket_key })
  // }

  return(
    <div id="event-detail" className="layout">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-9">
            <div className="detailContainer text-wrap">
              <div className="card p-3 mt-3">
                <div className="row justify-content-center mb-2">
                  <div className="col-md-8 col-lg-8 col-12">
                    <img className="w-100" src={require('../../assets/img/payment_success.jpg')} alt='payment_success' />
                  </div>
                </div>
                <h3 className="text-success">Payment Success</h3>
                <p>Your Payment of <b>₹{data.amount}</b> for the event <b>{data.event_name}</b> is now confirmed and ID is #{data.id}. Now you can enter the expo hassle free.</p>
                <Link to="/your-events" className="btn btn-primary">Back to upcoming events</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentSuccess;