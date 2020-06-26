import React from 'react';

const OverlayLoader = ({loading}) => {
  return(
    <div className={`overlayContainer ${loading === false ? 'display-none' : ''}`}>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default OverlayLoader;