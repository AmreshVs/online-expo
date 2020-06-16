import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';

import Loader from 'components/loader';
import { setUserData } from 'redux/actions/commonActions';

const Logout = (props) => {

  const history = useHistory();
  
  React.useEffect(() => {
    localStorage.removeItem('userData');
    props.setUserData({});
    history.replace('/login');
  });

  return(
    <Loader/>
  )
}

const mapStateToProps = (state) => state.common;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setUserData: setUserData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);