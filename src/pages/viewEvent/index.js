import React from 'react';
import { useHistory } from 'react-router-dom';
import ReactTooltip from "react-tooltip";
import { Link } from 'react-router-dom';

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
                  <div className="d-flex bd-highlight mb-1 align-items-center">
                    <h5 className="mr-auto p-2 bd-highlight">Event Name</h5>
                    <Link className="p-2 bd-highlight" to="/event-detail">
                      <button className="btn btn-secondary">View Event Info</button>
                    </Link>
                    <Link className="p-2 bd-highlight" to="/">
                      <button className="btn btn-primary">View / Edit Stall</button>
                    </Link>
                  </div>
                  <div>
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
    </div>
  )
}

export default ViewEvent;