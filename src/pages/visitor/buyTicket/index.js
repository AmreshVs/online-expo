import React from 'react';
import { useHistory } from 'react-router-dom';

const VisitorBuyTicket = () => {

  const history = useHistory();

  const handlePay = () => {
    history.push('/payment-confirmation');
  }

  return (
    <div id="event-detail">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-9">
            <div className="detailContainer text-wrap">
              <div className="exhibitorContents pt-3 pb-3">
                <div className="card p-3 shadow-sm selectPackageVisitor">
                  <h5>Confirm to buy ticket</h5>
                  <div className="form-check">
                    <div className="checkLabelContainer">
                      <label className="form-check-label font-weight-bold" htmlFor="platinum">
                        Entry Fee - <span className="border badge badge-light">₹199</span>
                      </label>
                      <label className="form-check-label text-muted">
                        By clicking pay you will be redirected to our payment gateway. The gateway is very secured for online transactions.
                      </label>
                    </div>
                  </div>
                  <div className="btnLRContainer">
                    <button className="btn btn-primary" onClick={handlePay}>Pay</button>
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

export default VisitorBuyTicket;