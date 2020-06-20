import axios from 'axios';

// import Logout from '@common/logout';

const UseAxios = async (params, data) => {
  let { url, method, headers } = params;
  
  return await axios({
    url: url,
    method: method,
    headers: headers || {
      'Content-type': 'none'
    },
    data: data || {},
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    // if(error.response.data.message !== undefined && error.response.data.message === 'Please Login to Continue'){
      // Logout();
    // }
    return error;
  })
}

export default UseAxios;