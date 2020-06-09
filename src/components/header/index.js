import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

const Header = () => {

  const [toggle, setToggle] = React.useState(false);

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
            <li className="nav-item">
              <Link className="nav-link smoth-scroll" to="/register">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link smoth-scroll" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;