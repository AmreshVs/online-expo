import React from 'react';

const SelectPackage = (props) => {

  const [selected, setSelected] = React.useState('platinum');

  const handleChange = (e) => {
    setSelected(e.target.value);
  }

  return (
    <div className="card p-3 shadow-sm selectPackage">
      <h5>Choose your package</h5>
      <div className="form-check d-flex">
        <input className="form-check-input" id="platinum" name="packages" type="radio" value="platinum" onChange={handleChange} checked={selected === 'platinum'} />
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
        <input className="form-check-input" name="packages" id="diamond" type="radio" value="diamond" onChange={handleChange} checked={selected === 'diamond'} />
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
        <input className="form-check-input" name="packages" id="gold" type="radio" value="gold" onChange={handleChange} checked={selected === 'gold'} />
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
        <input className="form-check-input" name="packages" id="silver" type="radio" value="silver" onChange={handleChange} checked={selected === 'silver'} />
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
        <button className="btn btn-primary" onClick={props.handlePay}>Pay</button>
      </div>
    </div>
  )
}

export default SelectPackage;