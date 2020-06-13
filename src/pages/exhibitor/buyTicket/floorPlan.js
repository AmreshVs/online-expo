import React from 'react';

import FloorPlanPage1 from '../../../components/floorPlan/page1';
import FloorPlanPage2 from '../../../components/floorPlan/page2';

const FloorPlans = (props) => {

  const [selected, setSelected] = React.useState('');

  const handleClick = (id) => {
    setSelected(id);
  }

  return (
    <div className="card p-3 shadow-sm floorPlan">
      <h5>Choose your place</h5>
      <FloorPlanPage1 selected={selected} handleClick={handleClick} />
      <FloorPlanPage2 selected={selected} handleClick={handleClick} />
      <div className="btnLRContainer">
        <button className="btn btn-primary" onClick={props.handleBack}>Back</button>
        <button className="btn btn-primary" onClick={props.handleNext}>Next</button>
      </div>
    </div>
  )
}

export default FloorPlans;