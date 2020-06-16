import React from 'react';
import { useHistory } from 'react-router-dom';
import { Heart } from 'react-feather';

import UseAxios from 'hooks/UseAxios';
import Loader from 'components/loader';
import { FAVORITES, ADD_FAVORITE } from 'api';

const Favourites = () => {

  const history = useHistory();

  const [state, setState] = React.useState({
    loading: true,
    data: [],
    reload: false
  });

  React.useEffect(() => {
    loadData();
  }, [state.reload]);

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
    setState({ ...state, reload: true });
  }

  return (
    state.loading === true ? 
    <Loader />
    :
    <div className="yourEvents">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-9">
            <div className="detailContainer text-wrap">
              <div className="pt-3 pb-3">
                <div className="card p-3 shadow-sm">
                  <h5>Your Favorite Events</h5>
                  {state.data.length === 0 && 
                    <p className="mt-2">No Favourite Events!</p>
                  }
                  {state.data.length > 0 && state.data.map((item) => {
                    return(
                      <>
                        <div className="row" onClick={() => handleClick('event_key')}>
                          <div className="col-sm-3 col-4">
                            <img className="card-img" src="https://www.onlineexpo.com/site/assets/files/1033/onlineexpo-house-1.1920x1080.jpg" alt="event" />
                          </div>
                          <div className="col-sm-8 pl-0 col-6">
                            <h5 className="card-title mb-0">Event title</h5>
                            <p className="card-text mb-1"><small className="text-muted">3rd Nov 2020 - 2nd Apr 2021</small></p>
                          </div>
                          <div className="col-sm-1 col-2">
                            <div className="heartContainer pt-0" onClick={() => handleFavourite('event_key')}>
                              <Heart color="white" fill="red" />
                            </div>
                          </div>
                        </div>
                        <div className="divider" />
                      </>
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