import React from 'react';
import { useHistory } from 'react-router-dom';
import ReactTooltip from "react-tooltip";
import { Link } from 'react-router-dom';

import FloorPlanPage1 from '../../components/floorPlan/page1';
import FloorPlanPage2 from '../../components/floorPlan/page2';
import UseAxios from 'hooks/UseAxios';
import Loader from 'components/loader';
import { STALL_BLOCKS } from 'api';

const ViewEvent = () => {

  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/stall-detail/${id}`);
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
    const response = await UseAxios({ ...STALL_BLOCKS, url: STALL_BLOCKS.url + 'bpfxvxwjqxsmyxub' });
    setState({ ...state, data: response.data, loading: false });
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
                    <h5 className="mr-auto p-2 bd-highlight">Event Name</h5>
                    <Link className="p-2 bd-highlight" to="/event-detail">
                      <button className="btn btn-secondary">View Event Info</button>
                    </Link>
                    <Link className="p-2 bd-highlight" to="/">
                      <button className="btn btn-primary">View / Edit Stall</button>
                    </Link>
                  </div>
                  <div>
                    <FloorPlanPage1 handleClick={handleClick} data={state.data.room1} />
                    <FloorPlanPage2 handleClick={handleClick} data={state.data.room2} />
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