import React from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

import UseAxios from 'hooks/UseAxios';
import Loader from 'components/loader';
import { UPCOMING_EVENTS } from 'api';
import { ADMIN_URL } from '../../constants';

const YourEvents = () => {

  const history = useHistory();

  const handleClick = (key, title, ticket_key, startDate) => {
    var today = moment(new Date(), 'DD-MM-YYYY');
    var start = moment(new Date(startDate), 'DD-MM-YYYY');
    var days = start.diff(today, 'days');
    if(days <= 0){
      history.push('/view-event', { key: key, title: title, ticket_key: ticket_key });
    }
    else{
      history.push('/event-detail', { key: key });
    }
  }

  const [state, setState] = React.useState({
    loading: true,
    data: [],
  });

  React.useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setState({ ...state, loading: true });
    const response = await UseAxios(UPCOMING_EVENTS);
    setState({ ...state, data: response.data, loading: false });
  }

  return (
    state.loading === true ? 
    <Loader />
    :
    <div className="yourEvents layout">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-9">
            <div className="detailContainer text-wrap">
              <div className="pt-3 pb-3">
                <div className="card p-3 shadow-sm">
                  <h5>Your Upcoming Events</h5>
                  {state.data.length === 0 && 
                    <p>No Upcoming events, Please buy ticket to participate in event</p>
                  }
                  {state.data.length > 0 && state.data.map((item, index) => {
                    return(
                      <div key={index}>
                        <div className="cursor-pointer" onClick={() => handleClick(item.event_key, item.event_title, item.ticket_key, item.event_start_date)}>
                          <div className="row">
                            <div className="col-sm-3 col-4">
                              <img className="card-img" src={ADMIN_URL + item.event_image} alt="event" />
                            </div>
                            <div className="col-sm-9 pl-0 col-8">
                              <h5 className="card-title mb-0">{item.event_title}</h5>
                              <p className="card-text"><small className="text-muted">{moment(item.event_start_date).format('MMMM Do YYYY')} - {moment(item.event_end_date).format('MMMM Do YYYY')}</small></p>
                            </div>
                          </div>
                        </div>
                        <div className="divider" />
                      </div>
                    )})}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YourEvents;