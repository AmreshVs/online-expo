import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useHistory } from 'react-router-dom';
import { User } from 'react-feather';
import axios from 'axios';

const Header = () => {
  
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
    <nav className="navbar navbar-expand-lg fixed-top trans-navigation header-white grad-2">
      <div className="container">
        <a className="navbar-brand" href="https://worldtradehub.in">
          <img src={require('../../assets/img/logo.png')} alt="" className="img-fluid b-logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation" onClick={handleToggle}>
          <span className="navbar-toggler-icon">
            <FontAwesomeIcon icon="bars" />
          </span>
        </button>

        <div className={`collapse navbar-collapse justify-content-end ${toggle === true ? 'show' : ''}`} id="mainNav">
          <ul className="navbar-nav ">
            {userData === null ? 
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
                  <div className="userName nav-link">
                    <User className="nav-icon" color="#FFF" />
                    {(userData !== null && userData.username !== undefined) ? userData.username : ''}
                  </div>
                  <div className="dropdown-content">
                    <Link to="/your-events">Your Events</Link>
                    <Link to="/favourites">Favorites</Link>
                    <Link to="/tickets">Tickets</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/change-password">Change Password</Link>
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