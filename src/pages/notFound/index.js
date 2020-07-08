import React from 'react';
import { Link } from 'react-router-dom';
 
const NotFound = () => {
  return(
    <div className="layout d-flex align-items-center justify-content-center">
      <div>
        <h1 className="text-center">Oops!</h1>
        <h1 className="text-center">404</h1>
        <h6 className="text-center">Page Not Found!</h6>
        <Link className="btn btn-primary" to="/events">Back to Events</Link>
      </div>
    </div>
  )
}

export default NotFound;