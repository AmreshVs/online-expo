import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useHistory } from 'react-router-dom';
import { User } from 'react-feather';
import axios from 'axios';

const Header = ({ access_token }) => {
  
  const history = useHistory();
  const [toggle, setToggle] = React.useState(false);
  let userData = localStorage.getItem('userData');
  if(userData === null){
    history.replace('/logout');
  }
  else{
    userData = JSON.parse(userData);
    axios.defaults.headers.authorization = `Bearer ${userData.access_token}`;
  }

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <nav className="navbar navbar-expand-lg trans-navigation header-white">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={require('../../assets/img/logo.png')} alt="" className="img-fluid b-logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation" onClick={handleToggle}>
          <span className="navbar-toggler-icon">
            <FontAwesomeIcon icon="bars" />
          </span>
        </button>

        <div className={`collapse navbar-collapse justify-content-end ${toggle === true ? 'show' : ''}`} id="mainNav">
          <ul className="navbar-nav ">
            {access_token === undefined && (userData !== null && userData.access_token === undefined) ? 
              <>
                <li className="nav-item">
                  <Link className="nav-link smoth-scroll" to="/register">Register</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link smoth-scroll" to="/login">Login</Link>
                </li>
              </>
            :
              <>
                <li className="nav-item">
                  <Link className="nav-link smoth-scroll" to="/events">Latest Events</Link>
                </li>
                <li className="dropdown nav-item">
                  <Link className="nav-link smoth-scroll" to="/register">
                    <User className="nav-icon" />
                    {(userData !== null && userData.username !== undefined) ? userData.username : ''}
                  </Link>
                  <div className="dropdown-content">
                    <Link to="/your-events">Your Events</Link>
                    <Link to="/favourites">Favorites</Link>
                    <Link to="/tickets">Tickets</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/logout">Logout</Link>
                  </div>
                </li>
              </>
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => state.common.userData;

export default connect(mapStateToProps)(Header);