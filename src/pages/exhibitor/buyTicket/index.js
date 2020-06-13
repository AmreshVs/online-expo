import React from 'react';
import { useHistory } from 'react-router-dom';

import CompanyDetails from './companyDetails';
import FloorPlan from './floorPlan';
import SelectPackage from './selectPackage';

const ExhibitorBuyTicket = () => {

  const history = useHistory();
  const [slideAnimation, setSlideAnimation] = React.useState({
    left: { transition: 'all .3s', transform: 'translate(0px, 0px)' },
    right: { transition: 'all .3s', transform: 'translate(-1200px, 0px)', display: 'none' },
    last: { transition: 'all .3s', transform: 'translate(-1200px, 0px)', display: 'none' }
  });

  const handleNext = () => {
    setSlideAnimation({ ...slideAnimation, right: { ...slideAnimation.right, transform: 'translate(-1200px, 0px)', display: 'block'}, left: { ...slideAnimation.left, transform: 'translate(-1200px, 0px)'} });
    setTimeout(() => {
      setSlideAnimation({ ...slideAnimation, right: { ...slideAnimation.right, transform: 'translate(0px, 0px)', display: 'block'}, left: { ...slideAnimation.left, transform: 'translate(-1200px, 0px)', display:'none'} });
    }, 100);
  }

  const handleBack = () => {
    setSlideAnimation({ ...slideAnimation, right: { ...slideAnimation.right, transform: 'translate(-1200px, 0px)'}, left: { ...slideAnimation.left, transform: 'translate(-1200px, 0px)', display: 'block' } });
    setTimeout(() => {
      setSlideAnimation({ ...slideAnimation, right: { ...slideAnimation.right, transform: 'translate(-1200px, 0px)', display: 'none'}, left: { ...slideAnimation.left, transform: 'translate(-0px, 0px)', display: 'block' } });
    }, 100);
  }

  const handleNext1 = () => {
    setSlideAnimation({ ...slideAnimation, last: { ...slideAnimation.last, transform: 'translate(-1200px, 0px)', display: 'block'} });
    setTimeout(() => {
      setSlideAnimation({ ...slideAnimation, right: { ...slideAnimation.right, transform: 'translate(-1200px, 0px)', display: 'none' }, last: { ...slideAnimation.last, transform: 'translate(0px, 0px)', display: 'block'} });
    }, 100);
  }

  const handleBack1 = () => {
    setSlideAnimation({ ...slideAnimation, right: { ...slideAnimation.right, transform: 'translate(-1200px, 0px)', display: 'block' } });
    setTimeout(() => {
      setSlideAnimation({ ...slideAnimation, last: { ...slideAnimation.last, transform: 'translate(-1200px, 0px)', display: 'none' }, right: { ...slideAnimation.right, transform: 'translate(0px, 0px)', display: 'block' }});
    }, 100);
  }

  const handlePay = () => {
    history.push('/payment-confirmation');
  }

  return(
    <div id="event-detail">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-9">
            <div className="detailContainer text-wrap">
              <div className="exhibitorContents pt-3 pb-3" style={slideAnimation.left}>
                <CompanyDetails handleNext={handleNext} />
              </div>
              <div className="exhibitorContents pt-3 pb-3" style={slideAnimation.right}>
                <FloorPlan handleNext={handleNext1} handleBack={handleBack} />
              </div>
              <div className="exhibitorContents pt-3 pb-3" style={slideAnimation.last}>
                <SelectPackage handleBack={handleBack1} handlePay={handlePay} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExhibitorBuyTicket;