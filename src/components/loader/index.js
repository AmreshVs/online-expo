import React from 'react';

const Loader = () => {
  return(
    <div className="loaderContainer layout">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Loader;