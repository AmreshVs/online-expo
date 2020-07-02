/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import Event from 'components/event';
import UseAxios from 'hooks/UseAxios';
import Loader from 'components/loader';
import { EVENTS } from 'api';

const Events = () => {

  const [state, setState] = React.useState({
    loading: true,
    data: [],
  });

  React.useEffect(() => {
    const loadData = async () => {
      setState({ ...state, loading: true });
      const response = await UseAxios(EVENTS);
      setState(s => ({ ...s, data: response.data, loading: false }));
    }

    loadData();
  }, []);

  return (
    <div id="eventsList" className="layout container-fluid pt-3">
      {state.loading === true ?
        <Loader />
        :
        <div className="row">
          {state.data.map((event, index) => {
            return(
              <Event data={event} key={index} />
            )
          })}
        </div>
      }
    </div>
  )
}

export default Events;