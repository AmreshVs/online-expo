import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';

import Loader from 'components/loader';
import { setUserData } from 'redux/actions/commonActions';

const Main = (props) => {

  const history = useHistory();

  React.useEffect(() => {
    const validateUser = async () => {
      let userData = await localStorage.getItem('userData');
      userData = JSON.parse(userData);
      if(userData === null || Object.keys(userData) <= 0){
        history.replace('/login');
      }
      else{
        props.setUserData(userData);
        history.replace('/events');
      }
    }
    
    validateUser();
  }, [history, props])

  return (
    <Loader/>
  )
}

const mapStateToProps = (state) => state.common;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setUserData: setUserData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);