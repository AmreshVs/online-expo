/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import UseAxios from 'hooks/UseAxios';
import Loader from 'components/loader';
import { TICKET_HISTORY } from 'api';
import NoData from 'components/noData';

const Tickets = () => {

  const [state, setState] = React.useState({
    loading: true,
    data: [],
  });

  React.useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setState({ ...state, loading: true });
    const response = await UseAxios(TICKET_HISTORY);
    setState({ ...state, data: response.data, loading: false });
  }

  return (
    state.loading === true ? 
    <Loader/>
    :
    <div className="tickets layout">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-9">
            <div className="text-wrap">
              <div className="pt-3 pb-3">
                <div className="card p-3 shadow-sm">
                  <h5>Ticket History</h5>
                  <div className="row">
                    {state.data.length === 0 && 
                      <NoData text="No Tickets available, Please buy ticket to participate in event" />
                    }
                    {state.data.length > 0 && state.data.map((ticket) => {
                      return(
                        <div className="col-sm-5 mb-2">
                          <div className="row">
                            <div className="col-sm-3 col-4 pr-0 mr-0 d-flex align-items-center justify-content-center">
                              <Link to="/view-event">
                                <img className="card-img" src={require('../../assets/img/ticket-icon.png')} alt="event" />
                              </Link>
                            </div>
                            <div className="col-sm-9 pl-0 col-6">
                              <Link to="/view-event">
                                <h5 className="card-title mb-1">{ticket.event_title}</h5>
                                <h6 className="text-secondary mb-0">₹{ticket.subscription_price}</h6>
                                <p className="card-text mb-0"><small className="text-muted">{moment(ticket.created_at).format('MMMM Do YYYY')}</small></p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      )
                    })}
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

export default Tickets;