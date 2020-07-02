/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Heart } from 'react-feather';
import moment from 'moment';

import UseAxios from 'hooks/UseAxios';
import Loader from 'components/loader';
import { FAVORITES, ADD_FAVORITE } from 'api';
import { ADMIN_URL } from '../../constants';
import NoData from 'components/noData';

const Favourites = () => {

  const history = useHistory();

  const [state, setState] = React.useState({
    loading: true,
    data: [],
    reload: false
  });

  React.useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setState({ ...state, loading: true });
    const response = await UseAxios(FAVORITES);
    setState({ ...state, data: response.data, loading: false });
  }

  const handleClick = (event_key) => {
    history.push('/event_detail', { event_key });
  }

  const handleFavourite = async (event_key) => {
    await UseAxios({ ...ADD_FAVORITE, url: ADD_FAVORITE.url + event_key });
    loadData();
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
                  <h5>Your Favorite Events</h5>
                  {state.data.length === 0 && 
                    <NoData text="No Favourite Events!" />
                  }
                  {state.data.length > 0 && state.data.map((item, index) => {
                    return(
                      <div key={index}>
                        <div className="row">
                          <div className="col-sm-3 col-4" onClick={() => handleClick(item.event_key)}>
                            <img className="card-img" src={ADMIN_URL + item.event_image} alt="event" />
                          </div>
                          <div className="col-sm-8 pl-0 col-6" onClick={() => handleClick(item.event_key)}>
                            <h5 className="card-title mb-0">{item.event_title}</h5>
                            <p className="card-text mb-1"><small className="text-muted">{moment(item.event_start_date).format('MMMM Do YYYY')} - {moment(item.event_end_date).format('MMMM Do YYYY')}</small></p>
                          </div>
                          <div className="col-sm-1 col-2">
                            <div className="heartContainer pt-0" onClick={() => handleFavourite(item.event_key)}>
                              <Heart color="white" fill="red" />
                            </div>
                          </div>
                        </div>
                        <div className="divider" />
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
  )
}

export default Favourites;