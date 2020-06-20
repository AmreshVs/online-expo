import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

import UseAxios from 'hooks/UseAxios';
import Loader from 'components/loader';
import { STALL_DETAIL } from 'api';
import { ADMIN_URL } from '../../constants';

const StallDetail = () => {

  const history = useHistory();
  const location = useLocation();
  const { key, edit } = location.state;

  const [state, setState] = React.useState({
    loading: true,
    data: [],
  });

  React.useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setState({ ...state, loading: true });
    const response = await UseAxios({ ...STALL_DETAIL, url: STALL_DETAIL.url + key });
    setState({ ...state, data: response.data, loading: false });
  }

  const handleEdit = () => {
    history.push('/edit-stall', { key: key });
  }

  let data = state.data;

  let connectWith = [
    { id: 1, logo: 'web', title: 'Webpage', link: data.website },
    { id: 2, logo: 'meet', title: 'Google Meet' , link: data.meet_id },
    { id: 5, logo: 'fb', title: 'Facebook Live' , link: data.fb_url },
    { id: 6, logo: 'youtube', title: 'Youtube Live' , link: data.youtupe_link },
    { id: 3, logo: 'zoom', title: 'Zoom' , link: data.zoom_id },
    { id: 4, logo: 'whatsapp', title: 'Whatsapp' , link: data.whatsapp_number },
  ]

  return(
    state.loading === true ?
    <Loader/>
    :
    <div className="stallDetail">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 pt-3 pb-3">
            {edit === false ? null : <div className="text-right mb-2">
              <button className="btn btn-primary" onClick={handleEdit}>Edit</button>
            </div>}
            <div className="detailContainer text-wrap shadow-sm">
              <img className="image" src={ADMIN_URL + '/' + data.cover_image_path} alt="online-expo" />
              <div className="p-3">
                <div className="d-flex align-items-center">
                  <img className="logo mr-2" src={ADMIN_URL + '/' + data.logo_image_path} alt={`webpage-logo`} />
                  <h2>{data.company_name}</h2>
                </div>
                <div className="ck-content">{ReactHtmlParser(data.company_desc)}</div>
                <h6>Connect with:</h6>
                <div className="row connectWith">
                  {connectWith.map((connect) => {
                    return(
                      <div className="col-sm-3 mb-3 col-6" key={connect.id}>
                        <a target="_blank" rel="noopener noreferrer" href={connect.link}>
                          <div className="d-flex">
                            <div className="col-sm-4 text-center pr-0">
                              <img className="contactImage" src={require(`../../assets/img/${connect.logo}_logo.png`)} alt={`${connect.logo}-logo`} />
                            </div>
                            <div className="col-sm-8 d-flex align-items-center pl-0">
                              {connect.title}
                            </div>
                          </div>
                        </a>
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

export default StallDetail;