import React from 'react';
import { useHistory } from 'react-router-dom';
import ReactTooltip from "react-tooltip";

import FloorPlanPage1 from '../../components/floorPlan/page1';
import FloorPlanPage2 from '../../components/floorPlan/page2';

const ViewEvent = () => {

  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/stall-detail/${id}`);
  }

  return (
    <div className="viewEvent">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-9">
            <div className="detailContainer text-wrap">
              <div className="pt-3 pb-3">
                <div className="card p-3 shadow-sm">
                  <h5>View Event</h5>
                  <FloorPlanPage1 handleClick={handleClick} />
                  <FloorPlanPage2 handleClick={handleClick} />
                  <ReactTooltip html={true} disable={false} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewEvent;