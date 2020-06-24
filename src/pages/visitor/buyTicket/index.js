import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { VISITOR_PACKAGE } from 'api';
import UseAxios from 'hooks/UseAxios';
import Button from 'components/button';

const VisitorBuyTicket = () => {

  const history = useHistory();
  const location = useLocation();
  let key = location.state.key;
  let price = location.state.price;

  const [spinner, setSpinner] = React.useState(false);

  const handlePay = async () => {
    setSpinner(true);
    let formData = new FormData();
    formData.set('event_key', key);
    const response = await UseAxios(VISITOR_PACKAGE, formData);
    setSpinner(false);
    history.push('/payment', { url: response.data.payment_url });
  }

  return (
    <div id="event-detail" className="layout">
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
                        Entry Fee - <span className="border badge badge-light">₹{price}</span>
                      </label>
                      <label className="form-check-label text-muted">
                        By clicking pay you will be redirected to our payment gateway. The gateway is very secured for online transactions.
                      </label>
                    </div>
                  </div>
                  <div className="btnLRContainer">
                    <Button className="btn btn-primary" onClick={handlePay} loading={spinner}>
                      Pay
                    </Button>
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