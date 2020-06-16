import React from 'react';

import UseAxios from 'hooks/UseAxios';
import { SELECT_PACKAGE } from 'api';
import Button from 'components/button';

const SelectPackage = (props) => {

  const [selected, setSelected] = React.useState(1);
  const [spinner, setSpinner] = React.useState(false);

  const handleChange = (e) => {
    setSelected(e.target.value);
  }

  const handlePay = async () => {
    setSpinner(true);
    let formData = new FormData();
    formData.set('package_type', selected);
    formData.set('ticket_key', props.ticketKey);
    const response = await UseAxios(SELECT_PACKAGE, formData);
    console.log(response);
    setSpinner(false);
    props.handlePay();
  }

  return (
    <div className="card p-3 shadow-sm selectPackage">
      <h5>Choose your package</h5>
      <div className="form-check d-flex">
        <input className="form-check-input" id="platinum" name="packages" type="radio" value="1" onChange={handleChange} checked={selected === 1} />
        <div className="checkLabelContainer">
          <label className="form-check-label font-weight-bold" htmlFor="platinum">
            Platinum - <span className="border badge badge-primary">₹19,999</span>
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
      </div>
      <div className="form-check d-flex">
        <input className="form-check-input" name="packages" id="diamond" type="radio" value="2" onChange={handleChange} checked={selected === 2} />
        <div className="checkLabelContainer">
          <label className="form-check-label font-weight-bold" htmlFor="diamond">
            Diamond - <span className="border badge badge-info">₹15,999</span>
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
      </div>
      <div className="form-check d-flex">
        <input className="form-check-input" name="packages" id="gold" type="radio" value="3" onChange={handleChange} checked={selected === 3} />
        <div className="checkLabelContainer">
          <label className="form-check-label font-weight-bold" htmlFor="gold">
            Gold - <span className="border badge badge-warning">₹9,999</span>
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
      </div>
      <div className="form-check d-flex">
        <input className="form-check-input" name="packages" id="silver" type="radio" value="4" onChange={handleChange} checked={selected === 4} />
        <div className="checkLabelContainer">
          <label className="form-check-label font-weight-bold" htmlFor="silver">
            Silver - <span className="border badge badge-light">₹7,999</span>
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
      <div className="btnLRContainer">
        <button className="btn btn-primary" onClick={props.handleBack}>Back</button>
        <Button className="btn btn-primary" onClick={handlePay} loading={spinner}>
          Pay
        </Button>
      </div>
    </div>
  )
}

export default SelectPackage;