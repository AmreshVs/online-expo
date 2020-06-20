import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ReactTooltip from "react-tooltip";
import { Link } from 'react-router-dom';

import FloorPlanPage1 from '../../components/floorPlan/page1';
import FloorPlanPage2 from '../../components/floorPlan/page2';
import UseAxios from 'hooks/UseAxios';
import Loader from 'components/loader';
import { STALL_BLOCKS } from 'api';

const ViewEvent = () => {

  const history = useHistory();
  const location = useLocation();
  let { key, title, ticket_key } = location.state;
  let { register_type } = JSON.parse(localStorage.getItem('userData'));

  const handleClick = (data) => {
    history.push('/stall-detail', { key: data.ticket_key });
  }

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
    const response = await UseAxios({ ...STALL_BLOCKS, url: STALL_BLOCKS.url + key });
    setState({ ...state, data: response.data, loading: false });
  }

  const handleViewEvent = () => {
    history.push('/event-detail', { key: key, buy: false });
  }

  const handleEditStall = () => {
    history.push('/stall-detail', { key: ticket_key, edit: true });
  }

  return (
    state.loading === true ?
    <Loader/>
    :
    <div className="viewEvent">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-9">
            <div className="detailContainer text-wrap">
              <div className="pt-3 pb-3">
                <div className="card p-3 shadow-sm">
                  <div className="d-flex bd-highlight mb-1 align-items-center">
                    <h5 className="mr-auto p-2 bd-highlight">{title}</h5>
                    <button className="btn btn-secondary" onClick={handleViewEvent}>View Event Info</button>
                    {register_type === 1 ? <button className="btn btn-primary ml-2" onClick={handleEditStall}>View / Edit Stall</button> : null}
                  </div>
                  <div>
                    <FloorPlanPage1 view={1} handleClick={handleClick} data={state.data.room1} />
                    <FloorPlanPage2 view={1} handleClick={handleClick} data={state.data.room2} />
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