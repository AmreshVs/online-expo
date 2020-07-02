import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import SelectPackage from './selectPackage';

const ExhibitorBuyTicket = () => {

  const history = useHistory();
  const location = useLocation();
  const key = location.state.key;

  const handlePay = (data) => {
    history.push('/payment', { url: data.payment_url });
  }

  return(
    <div id="exhibitorBuyTicket" className="layout">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-9">
            <div className="detailContainer text-wrap">
              <div className="exhibitorContents pt-3 pb-3">
                <SelectPackage eventKey={key} handlePay={handlePay} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExhibitorBuyTicket;