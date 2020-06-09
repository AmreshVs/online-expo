import React from 'react';

import CompanyDetails from './companyDetails';

const ExhibitorBuyTicket = () => {

  const handleNext = () => {

  }

  return(
    <div className="layout" id="event-detail">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-9 pt-3 pb-3">
            <div className="detailContainer text-wrap shadow-sm">
              <CompanyDetails handleNext={handleNext} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExhibitorBuyTicket;