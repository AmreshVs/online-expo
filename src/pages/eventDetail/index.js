import React from 'react';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment';

import UseAxios from 'hooks/UseAxios';
import Loader from 'components/loader';
import { EVENT_DETAIL } from 'api';
import { ADMIN_URL } from '../../constants';

const EventDetail = () => {

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
                {buy === false ? null : <button className="btn btn-primary" onClick={handleBuyTicket}>Buy Ticket</button>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetail;