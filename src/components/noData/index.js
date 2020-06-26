import React from 'react';

const NoData = ({ text }) => {
  return(
    <div className="row justify-content-center">
      <div className="col-sm-5 text-center">
        <img className="w-100" src={require('../../assets/img/nodata.jpg')} alt="no_data" />
        <p className="mt-2">{text}</p>
      </div>
    </div>
  )
}

export default NoData;