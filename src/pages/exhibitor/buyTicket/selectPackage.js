/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import UseAxios from 'hooks/UseAxios';
import { SELECT_PACKAGE, SELECT_STALL } from 'api';
import Button from 'components/button';
import Loader from 'components/loader';


const SelectPackage = (props) => {

  const [selected, setSelected] = React.useState(1);
  const [spinner, setSpinner] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  let { country } = JSON.parse(localStorage.getItem('userData'));

  React.useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    let formData = new FormData();
    formData.set('event_key', props.eventKey);
    const response = await UseAxios(SELECT_STALL, formData);
    if(response.data.exhibitor_silver_price !== undefined){
      setSelected(4);
    }
    setData(response.data);
    setLoading(false);
  }

  const handleChange = (id) => {
    setSelected(id);
  }

  const handlePay = async () => {
    setSpinner(true);
    let formData = new FormData();
    formData.set('package_type', selected);
    formData.set('event_key', props.eventKey);
    formData.set('ticket_key', data.ticket_key);
    const response = await UseAxios(SELECT_PACKAGE, formData);
    setSpinner(false);
    props.handlePay(response.data);
  }

  return (
    loading === true ?
    <Loader />
    :
    <>
      <div className="card p-3 shadow-sm selectPackage">
        <h5>Choose your package</h5>
        {country.id === 101 ?
          <>
            {data.exhibitor_platinum_price !== '' &&
            <div className="form-check d-flex">
              <input className="form-check-input" id="platinum" name="packages" type="radio" value={1} onChange={() => handleChange(1)} checked={selected === 1} />
              <div className="checkLabelContainer">
                <label className="form-check-label font-weight-bold" htmlFor="platinum">
                  Platinum - <span className="border badge badge-primary">₹{data.exhibitor_platinum_price} + ₹{(data.exhibitor_platinum_price * (18/100)).toFixed(2)} GST</span>
                </label>
                <label className="form-check-label text-muted">
                  Prime location at online trade expo.
                  100% Leads generation guarantee.
                  1Year lead generating landing page.
                  Unlimited leads alert through sms & email.
                  Free 100 visitors username and password.
                  Logo n company name utilised at premium listing.
                  10,000 free promotional SMS & Email.
                  Logo will be used at E- Invitation.
                </label>
              </div>
            </div>}
            {data.exhibitor_diamond_price !== '' &&
            <div className="form-check d-flex">
              <input className="form-check-input" name="packages" id="diamond" type="radio" value={2} onChange={() => handleChange(2)} checked={selected === 2} />
              <div className="checkLabelContainer">
                <label className="form-check-label font-weight-bold" htmlFor="diamond">
                  Diamond - <span className="border badge badge-info">₹{data.exhibitor_diamond_price} + ₹{(data.exhibitor_diamond_price * (18/100)).toFixed(2)} GST</span>
                </label>
                <label className="form-check-label text-muted">
                  Location at next to prime location at online trade expo.
                  100% Leads generation guarantee.
                  9 months lead generating landing page.
                  5000 leads alert through sms & email.
                  Free 75 visitors username and password.
                  Logo n company name utilised at Platinum listing.
                  8,000 free promotional SMS & Email.
                  Logo will be used at E- Invitation.
                </label>
              </div>
            </div>}
            {data.exhibitor_gold_price !== '' &&
            <div className="form-check d-flex">
              <input className="form-check-input" name="packages" id="gold" type="radio" value={3} onChange={() => handleChange(3)} checked={selected === 3} />
              <div className="checkLabelContainer">
                <label className="form-check-label font-weight-bold" htmlFor="gold">
                  Gold - <span className="border badge badge-warning">₹{data.exhibitor_gold_price} + ₹{(data.exhibitor_gold_price * (18/100)).toFixed(2)} GST</span>
                </label>
                <label className="form-check-label text-muted">
                  Space at online trade expo.
                  100% Leads generation guarantee.
                  4 month's lead generating landing page.
                  2000 leads alert through sms & email.
                  Free 30 visitors username and password.
                  Logo n company name utilised at Platinum listing.
                  4,000 free promotional SMS & Email.
                </label>
              </div>
            </div>}
          </>
          :
          <>
            <div className="form-check d-flex">
              <input className="form-check-input" name="packages" id="silver" type="radio" value={4} onChange={() => handleChange(4)} checked={selected === 4} />
              <div className="checkLabelContainer">
                <label className="form-check-label font-weight-bold" htmlFor="silver">
                  International Exhibitor - <span className="border badge badge-light">₹{data.exhibitor_silver_price} + ₹{(data.exhibitor_silver_price * (18/100)).toFixed(2)} GST</span>
                </label>
                <label className="form-check-label text-muted">
                  Space at online trade expo.
                  100% Leads generation guarantee.
                  2 month's lead generating landing page.
                  1000 leads alert through sms & email.
                  Free 20 visitors username and password.
                  Logo n company name utilised at Platinum listing.
                  2,000 free promotional SMS & Email.
                </label>
              </div>
            </div>
          </>
        }
        <div className="btnLRContainer">
          <Button className="btn btn-primary" onClick={handlePay} loading={spinner}>
            Pay
          </Button>
        </div>
      </div>
    </>
  )
}

export default SelectPackage;