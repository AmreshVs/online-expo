import React from 'react';
import { useHistory } from 'react-router-dom';
import { Heart } from 'react-feather';
import moment from 'moment';

import UseAxios from 'hooks/UseAxios';
import { ADD_FAVORITE } from 'api';
import { ADMIN_URL } from '../../constants';

const Event = ({ data }) => {

  const history = useHistory();
  const [fav, setFav] = React.useState(data.is_fav === 0 ? false : true);

  const handleFavourite = async () => {
    await UseAxios({ ...ADD_FAVORITE, url: ADD_FAVORITE.url + data.event_key });
    setFav(!fav);
  }

  const handleClick = () => {
    history.push('event-detail', { key: data.event_key });
  }

  let image = data.event_image !== null ? ADMIN_URL + data.event_image : require('../../assets/img/placeholder.png');

  return(
    <div className="col-sm-3">
      <div className="heartContainer" onClick={handleFavourite}>
        <Heart color="white" fill={fav === false ? '#CCC' : 'red'} />
      </div>
      <div className="card shadow img-gradient" onClick={handleClick}>
        <img className="card-img" src={image} alt="event" />
        <div className="card-body p-3">
          <h6 className="card-title mb-0">{data.event_title}</h6>
          <p className="card-text"><small>{moment(data.event_start_date).format('MMMM Do YYYY')} - {moment(data.event_end_date).format('MMMM Do YYYY')}</small></p>
        </div>
      </div>
    </div>   
  )
}

export default Event;