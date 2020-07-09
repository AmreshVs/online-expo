/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import ImageGallery from 'react-image-gallery';
import { CheckCircle, Image, Film, Map, MapPin, FileText, MessageCircle, Box } from 'react-feather';

import UseAxios from 'hooks/UseAxios';
import Loader from 'components/loader';
import { STALL_DETAIL } from 'api';
import { ADMIN_URL } from '../../constants';

const StallDetail = () => {

  const history = useHistory();
  const location = useLocation();
  const { key, edit } = location.state;
  let { register_type } = JSON.parse(localStorage.getItem('userData'));
  const [multipleImages, setMultipleImages] = React.useState([]);

  const [state, setState] = React.useState({
    loading: true,
    data: [],
    nextData: []
  });

  React.useEffect(() => {
    loadData();
  }, [key]);

  const loadData = async () => {
    setState({ ...state, loading: true });
    const response = await UseAxios({ ...STALL_DETAIL, url: STALL_DETAIL.url + key });
    setState({ ...state, data: response.data.ticket, nextData: response.data.nextticket, loading: false });
    let imagesArray = [];
    response.data.ticket.image_files.forEach(file => {
      imagesArray = [...imagesArray, { original: ADMIN_URL + '/' + file.image_path, thumbnail: ADMIN_URL + '/' + file.image_path }];
    });
    setTimeout(() => {
      setMultipleImages(imagesArray);
    }, 1000);
  }

  const getQueryParams = ( params, url ) => {
    if (!url) url = window.location.href;
    params = params.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + params + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  };

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
    { id: 4, logo: 'whatsapp', title: 'Whatsapp' , link: 'https://api.whatsapp.com/send?phone=' + data.whatsapp_number },
  ];

  const handleClick = (key) => {
    history.push('stall-detail', { key: key });
  }

  return(
    state.loading === true ?
    <Loader/>
    :
    <div className="stallDetail layout">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 pt-3 pb-3">
            {Number(register_type) === 1 && edit === false ? null : <div className="text-right mb-2">
              <button className="btn btn-primary" onClick={handleEdit}>Edit</button>
            </div>}
            <div className="detailContainer text-wrap">
              <div className="card card-body shadow-sm p-0 imageContainer">
                <img className="image" src={ADMIN_URL + '/' + data.cover_image_path} alt="online-expo" />
              </div>
              <div className="card card-body shadow-sm">
                <div className="d-flex align-items-center">
                  <img className="logo mr-2" src={ADMIN_URL + '/' + data.logo_image_path} alt={`webpage-logo`} />
                  <h2>{data.company_name}</h2>
                </div>
                <div className="ck-content">{ReactHtmlParser(data.company_desc)}</div>
              </div>
              <div className="row">
                {data.features !== '' &&
                <div className="col-md-4">
                  <div className="card shadow-sm">
                    <div className="card-header grad-2">
                      <CheckCircle size={20} className="mr-2 mt-1" color="#FFF" />
                      <h5>Features</h5>
                    </div>
                    <div className="card-body">
                      <ul className="list-group">
                        {data.features.split(',').map((item) => <li className="list-group-item">{item}</li> )}
                      </ul>
                    </div>
                  </div>
                </div>
                }
                <div className="col-md-8">
                  <div className="card shadow-sm">
                    <div className="card-header grad-2">
                      <Image size={20} className="mr-2 mt-1" color="#FFF" />
                      <h5>Images</h5>
                    </div>
                    <div className="card-body">
                      {multipleImages.length > 0 ? <ImageGallery items={multipleImages} autoPlay={true} /> : null}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card shadow-sm">
                <div className="card-header grad-2">
                  <Box size={20} className="mr-2 mt-1" color="#FFF" />
                  <h5>Our Products or Services</h5>
                </div>
                <div className="card-body">
                  <p>{data.whytoconsider}</p>
                </div>
              </div>
              <div className="card shadow-sm">
                <div className="card-header grad-2">
                  <Film size={20} className="mr-2 mt-1" color="#FFF" />
                  <h5>Videos</h5>
                </div>
                <div className="row card-body">
                  {state.data.youtube_links.split(',').map((link, index) => {
                    return (
                      <div className="col-md-6 mb-4 video" key={index}>
                        <iframe title='youtube' width="100%" height="315" src={`https://www.youtube.com/embed/${getQueryParams('v', link)}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen="true" />
                      </div>
                    )
                  })}
                 </div> 
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="card shadow-sm">
                    <div className="card-header grad-2">
                      <Map size={20} className="mr-2 mt-1" color="#FFF" />
                      <h5>Localities</h5>
                    </div>
                    <div className="card-body">
                      <p>{state.data.locality}</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card shadow-sm">
                    <div className="card-header grad-2">
                      <MapPin size={20} className="mr-2 mt-1" color="#FFF" />
                      <h5>Shipment</h5>
                    </div>
                    <div className="card-body">
                      <p>{state.data.shipment}</p>
                    </div>
                  </div>
                </div>
                {state.data.attachment !== "undefined" &&
                <div className="col-sm-4">
                  <div className="card shadow-sm">
                    <div className="card-header grad-2">
                      <FileText size={20} className="mr-2 mt-1" color="#FFF" />
                      <h5>Brochure</h5>
                    </div>
                    <div className="card-body">
                      <a href={ADMIN_URL + '/' + state.data.attachment} className="btn btn-primary">Download Now</a>
                    </div>
                  </div>
                </div>}
              </div>
              {connectWith.length > 0 &&
              <div className="card shadow-sm">
                <div className="card-header grad-2">
                  <MessageCircle size={20} className="mr-2 mt-1" color="#FFF" />
                  <h5>Have a live chat or Enquiry</h5>
                </div>
                <div className="card-body connectWith">
                  <div className="container">
                    <div className="row">
                      {connectWith.map((connect) => {
                        if(connect.link !== ''){
                          return(
                            <div className="col-sm-3 mb-3 col-6" key={connect.id}>
                              <a target="_blank" rel="noopener noreferrer" href={connect.link}>
                                <div className="d-flex">
                                  <div className="col-sm-4 text-center pr-0 pl-0">
                                    <img className="contactImage" src={require(`../../assets/img/${connect.logo}_logo.png`)} alt={`${connect.logo}-logo`} />
                                  </div>
                                  <div className="col-sm-8 d-flex align-items-center pl-0">
                                    {connect.title}
                                  </div>
                                </div>
                              </a>
                            </div>
                          )
                        }
                        else{
                          return null;
                        }
                      })}
                    </div>
                  </div>
                </div>
              </div>}
              {state.nextData.length > 0 && 
              <div className="row-fluid">
                <h6>Suggested stalls</h6>
                <div id="eventsList" className="row">
                  {state.nextData.map((item, index) => {
                    return(
                      <div className="col-sm-4 mb-3" key={index}>
                        <div className="card shadow img-gradient" onClick={() => handleClick(item.ticket_key)}>
                          <img className="card-img" src={ADMIN_URL + '/' + item.cover_image_path} alt="event" />
                          <div className="card-body p-3">
                            <h6 className="card-title mb-0">{item.company_name}</h6>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StallDetail;