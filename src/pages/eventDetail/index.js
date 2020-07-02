/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment';

import UseAxios from 'hooks/UseAxios';
import Loader from 'components/loader';
import { EVENT_DETAIL } from 'api';
import { ADMIN_URL } from '../../constants';

const EventDetail = () => {

  let { register_type } = JSON.parse(localStorage.getItem('userData'));
  const history = useHistory();
  const location = useLocation();
  const key = location.state.key;
  const buy = location.state.buy;

  const [state, setState] = React.useState({
    loading: true,
    data: [],
  });

  React.useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setState({ ...state, loading: true });
    const response = await UseAxios({ ...EVENT_DETAIL, url: `${EVENT_DETAIL.url}/${key}` });
    setState({ ...state, data: response.data, loading: false });
  }

  const handleBuyTicket = () => {
    let { register_type } = JSON.parse(localStorage.getItem('userData'));
    history.push(`/${register_type === 1 ? 'exhibitor' : 'visitor'}/buy-ticket`, { key: key, price: state.data.visitors_package_price });
  }

  const handleContinueBuyTicket = () => {
    history.push('/exhibitor/continue-booking', { ticket_key: state.data.pending_stall_booking[0].ticket_key, event_key: state.data.event_key  });
  }

  let eventData = state.data;
  let image = eventData.event_image !== null ? ADMIN_URL + eventData.event_image : require('../../assets/img/placeholder.png');

  return(
    state.loading === true ?
    <Loader/>
    :
    <div className="layout" id="event-detail">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 pt-3 pb-3">
            <div className="detailContainer text-wrap shadow-sm">
              <img className="image" src={image} alt="online-expo" />
              <div className="p-3">
                <h1>{eventData.event_title}</h1>
                <small className="text-muted">{moment(eventData.event_start_date).format('MMMM Do YYYY')} - {moment(eventData.event_end_date).format('MMMM Do YYYY')}</small>
                <div className="mt-3">
                  {ReactHtmlParser(eventData.event_desc)}
                </div>
                {buy === false ? null : state.data.pending_stall_booking.length > 0 ? <button className="btn btn-primary" onClick={handleContinueBuyTicket}>Continue Stall Booking</button> : <button className="btn btn-primary" onClick={handleBuyTicket}>{register_type === 1 ? 'Book Stall' : 'Buy Entry Pass'}</button>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetail;