/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useHistory } from 'react-router-dom';

import FloorPlanPage1 from '../../../components/floorPlan/page1';
import FloorPlanPage2 from '../../../components/floorPlan/page2';
import UseAxios from 'hooks/UseAxios';
import { SELECT_STALL, STALL_BLOCKS } from 'api';
import Loader from 'components/loader';
import Button from 'components/button';
import { snackBarSuccess, snackBarError } from 'common/snackBar';

const FloorPlans = (props) => {

  const history = useHistory();
  const [selected, setSelected] = React.useState('');

  const [state, setState] = React.useState({
    loading: true,
    data: [],
    spinner: false
  });

  React.useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setState({ ...state, loading: true });
    const response = await UseAxios({ ...STALL_BLOCKS, url: STALL_BLOCKS.url + props.eventKey });
    setState({ ...state, data: response.data, loading: false });
  }

  const handleClick = (data) => {
    setSelected(data.id);
  }

  const handleNext = async () => {
    setState({ ...state, spinner: true });
    let formData = new FormData();
    formData.set('ticket_key', props.ticketKey);
    formData.set('event_key', props.eventKey);
    formData.set('stall_id', selected);
    const response = await UseAxios(SELECT_STALL, formData);
    setState({ ...state, spinner: false });
    if(response.status === 200){
      snackBarSuccess('Stall Booked!');
      history.replace('/your-events');
    }
    else{
      snackBarError(response.message);
    }
  }

  return (
    state.loading === true ?
    <Loader />
    :
    <div className="card p-3 shadow-sm floorPlan">
      <h5>Choose your place (Indian Exhibitor)</h5>
      <FloorPlanPage1 selected={selected} data={state.data.room1} handleClick={handleClick} />
      <h5>Choose your place (Foreign Exhibitor)</h5>
      <FloorPlanPage2 selected={selected} data={state.data.room2} handleClick={handleClick} />
      <div className="btnLRContainer">
        <button className="btn btn-primary" onClick={props.handleBack}>Back</button>
        <Button className="btn btn-primary" onClick={handleNext} loading={state.spinner}>
          Next
        </Button>
      </div>
    </div>
  )
}

export default FloorPlans;