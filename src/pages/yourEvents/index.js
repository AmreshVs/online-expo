/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

import UseAxios from 'hooks/UseAxios';
import Loader from 'components/loader';
import { UPCOMING_EVENTS } from 'api';
import { ADMIN_URL } from '../../constants';
import NoData from 'components/noData';

const YourEvents = () => {

  const history = useHistory();


  const handleClick = (key, title, ticket_key, status) => {
    if(status === 1){
      history.push('/view-event', { key: key, title: title, ticket_key: ticket_key });
    }
    else{
      history.push('/event-detail', { key: key });
    }
  }

  const [state, setState] = React.useState({
    loading: true,
    data: [],
    pending: []
  });

  React.useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setState({ ...state, loading: true });
    const response = await UseAxios(UPCOMING_EVENTS);
    setState({ ...state, data: response.data.upcomming, pending: response.data.pending_stall_booking, loading: false });
  }

  const handleContinueBuyTicket = (ticket_key, event_key) => {
    history.push('/exhibitor/continue-booking', { ticket_key: ticket_key, event_key: event_key  });
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
                <div className="card p-3 shadow-sm mb-3">
                  <h5>Your Upcoming Events</h5>
                  {state.data.length === 0 && 
                    <NoData text="No Upcoming events, Please buy ticket to participate in event" />
                  }
                  {state.data.length > 0 && state.data.map((item, index) => {
                    return(
                      <div key={index}>
                        <div className="cursor-pointer" onClick={() => handleClick(item.event_key, item.event_title, item.ticket_key, item.status)}>
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
                {state.pending.length > 0 ? 
                  <div className="card p-3 shadow-sm">
                    <h5>Continue to Book Stall</h5>
                    {state.pending.map((item, index) => {
                      return(
                        <div key={index}>
                          <div className="cursor-pointer" onClick={() => handleContinueBuyTicket(item.ticket_key, item.event_key)}>
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
                : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YourEvents;