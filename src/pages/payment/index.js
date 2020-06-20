import React from 'react';
import IframeComm from "react-iframe-comm";
import { useHistory, useLocation } from 'react-router-dom';

const Payment = () => {

  const check = React.useRef();
  const history = useHistory();
  const location = useLocation();
  let url = location.state.url;

  React.useEffect(() => {
    window.addEventListener("message", handler);
  })

  const handler = event => {
    // console.log(event)
  }

  const attributes = {
    src: url,
    width: "100%",
    height: "800px",
    frameBorder: 0,
  };

  const postMessageData = "hello iframe";
 
  // Message from iframe
  const onReceiveMessage = (e) => {
    if(typeof e.data === 'string' && e.data !== ''){
      let response = JSON.parse(e.data);
      history.replace('/payment-confirmation', { data: response });
    }
  };

  // iframe has loaded
  const onReady = (e) => {
      // console.log(e, "onReady");
      // console.log(check);
  };

  return (
    <>
      <IframeComm
        ref={check}
        attributes={attributes}
        postMessageData={postMessageData}
        handleReady={onReady}
        handleReceiveMessage={onReceiveMessage}
      />
    </>
  )
}

export default Payment;