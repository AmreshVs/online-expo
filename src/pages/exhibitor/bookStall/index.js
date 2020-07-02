import React from 'react';
import { useLocation } from 'react-router-dom';

import CompanyDetails from './companyDetails';
import FloorPlan from './floorPlan';

const ContinueBooking = () => {

  const location = useLocation();
  const ticketKey = location.state.ticket_key;
  const eventKey = location.state.event_key;
  const [layout, setLayout] = React.useState('');
  
  const [slideAnimation, setSlideAnimation] = React.useState({
    left: { transition: 'all .3s', transform: 'translate(0px, 0px)' },
    right: { transition: 'all .3s', transform: 'translate(-1200px, 0px)', display: 'none' },
    last: { transition: 'all .3s', transform: 'translate(-1200px, 0px)', display: 'none' }
  });



  const handleNext = () => {
    setLayout('full');
    setSlideAnimation({ ...slideAnimation, right: { ...slideAnimation.right, transform: 'translate(-1200px, 0px)', display: 'block'}, left: { ...slideAnimation.left, transform: 'translate(-1200px, 0px)'} });
    setTimeout(() => {
      setSlideAnimation({ ...slideAnimation, right: { ...slideAnimation.right, transform: 'translate(0px, 0px)', display: 'block'}, left: { ...slideAnimation.left, transform: 'translate(-1200px, 0px)', display:'none'} });
    }, 100);
    window.scrollTo(0, 0);
  }

  const handleBack = () => {
    setSlideAnimation({ ...slideAnimation, right: { ...slideAnimation.right, transform: 'translate(-1200px, 0px)'}, left: { ...slideAnimation.left, transform: 'translate(-1200px, 0px)', display: 'block' } });
    setTimeout(() => {
      setSlideAnimation({ ...slideAnimation, right: { ...slideAnimation.right, transform: 'translate(-1200px, 0px)', display: 'none'}, left: { ...slideAnimation.left, transform: 'translate(-0px, 0px)', display: 'block' } });
    }, 100);
    window.scrollTo(0, 0);
  }

  const handleNext1 = () => {
    setLayout('small');
    setSlideAnimation({ ...slideAnimation, last: { ...slideAnimation.last, transform: 'translate(-1200px, 0px)', display: 'block'} });
    setTimeout(() => {
      setSlideAnimation({ ...slideAnimation, right: { ...slideAnimation.right, transform: 'translate(-1200px, 0px)', display: 'none' }, last: { ...slideAnimation.last, transform: 'translate(0px, 0px)', display: 'block'} });
    }, 100);
    window.scrollTo(0, 0);
  }

  return(
    <div id="exhibitorBuyTicket" className={`layout ${layout !== '' && layout !== 'small' ? 'stallLayout' : layout === 'small' ? 'stallLayoutSmall' : '' }`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-9">
            <div className="detailContainer text-wrap">
              <div className="exhibitorContents pt-3 pb-3" style={slideAnimation.left}>
                <CompanyDetails ticketKey={ticketKey} handleNext={handleNext} />
              </div>
              <div className="exhibitorContents pt-3 pb-3" style={slideAnimation.right}>
                <FloorPlan handleNext={handleNext1} eventKey={eventKey} ticketKey={ticketKey} handleBack={handleBack} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContinueBooking;