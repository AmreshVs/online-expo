import React from 'react';
import IframeComm from "react-iframe-comm";

const Test = () => {

  const check = React.useRef();

  React.useEffect(() => {
    window.addEventListener("message", handler);
  })

  const handler = event => {
    console.log(event)
  }

  const attributes = {
    src: "http://admin.worldtradehub.in/admin/payment/index?ticket_key=92qd3n1cohpckmic",
    width: "100%",
    height: "575",
    frameBorder: 1, // show frame border just for fun...
  };

  const postMessageData = "hello iframe";
 
  // parent received a message from iframe
  const onReceiveMessage = (e) => {
      console.log(e, "onReceiveMessage");
  };

  // iframe has loaded
  const onReady = (e) => {
      console.log(e, "onReady");
      console.log(check);
  };
  console.log(check);
  return (
    <>
      <h1>Test</h1>
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

export default Test;