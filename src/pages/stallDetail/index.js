import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

const StallDetail = () => {

  const history = useHistory();
  const { id } = useParams();

  const handleBuyTicket = () => {
    
  }

  let connectWith = [
    { id: 1, logo: 'web', title: 'Webpage' },
    { id: 2, logo: 'meet', title: 'Google Meet' },
    { id: 3, logo: 'zoom', title: 'Zoom' },
    { id: 4, logo: 'whatsapp', title: 'Whatsapp' },
    { id: 5, logo: 'fb', title: 'Facebook Live' },
    { id: 6, logo: 'youtube', title: 'Youtube Live' },
  ]

  return(
    <div className="stallDetail">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 pt-3 pb-3">
            <div className="detailContainer text-wrap shadow-sm">
              <img className="image" src="https://www.onlineexpo.com/site/assets/files/1033/onlineexpo-house-1.1920x1080.jpg" alt="online-expo" />
              <div className="p-3">
                <h1>Stall Title {id}</h1>
                <p>Content</p>

                <h6>Connect with:</h6>
                <div className="row">
                  {connectWith.map((connect) => {
                    return(
                      <div className="col-sm-3" key={connect.id}>
                        <div className="d-flex">
                          <div className="col-sm-3">
                            <img className="contactImage" src={require(`../../assets/img/${connect.logo}_logo.png`)} alt={`${connect.logo}-logo`} />
                          </div>
                          <div className="col-sm-9 d-flex align-items-center pl-0">
                            {connect.title}
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
  )
}

export default StallDetail;