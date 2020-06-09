import React from 'react';

const Login = () => {

  const [resendOtp, setResendOtp] = React.useState(10);
  const [slideAnimation, setSlideAnimation] = React.useState({
    left: { transition: 'all .3s', transform: 'translate(0px, 0px)' },
    right: { transition: 'all .3s', transform: 'translate(-1200px, 0px)' }
  });
  const mobileNum = React.useRef(null);

  const otpRef = {
    1: React.useRef(null),
    2: React.useRef(null),
    3: React.useRef(null),
    4: React.useRef(null),
  }

  const handleNext = () => {
    setSlideAnimation({ right: { ...slideAnimation.right, transform: 'translate(0px, 0px)'}, left: { ...slideAnimation.left, transform: 'translate(-1200px, 0px)'} });
    if(validate()){
      console.log('Submit');
    }
    runTimer();
  }

  const runTimer = (sec = 10) => {
    let timer = setInterval(() => {
      sec -= 1;
      setResendOtp(sec);
      if(sec <= 0){
        clearInterval(timer);
      }
    }, 1000);
  }

  const validate = () => {
    if(mobileNum.current.value === ''){
      console.log('Mobile Number cannot be empty!');
      return false;
    }

    return true;
  }

  const handleBack = () => {
    setSlideAnimation({ right: { ...slideAnimation.right, transform: 'translate(-1200px, 0px)'}, left: { ...slideAnimation.left, transform: 'translate(0px, 0px)'} });
  }

  const handleSubmit = () => {
    
  }

  const handleOtpChange = (e, id) => {
    if (e.target.value === ''){
      if(id !== 1){
        otpRef[id - 1].current.focus();
      }
    }
    else{
      if(id !== 4){
        otpRef[id + 1].current.focus();
      }
    }
  }

  const handleResendOtp = () => {
    runTimer();
  }

  let disableSubmit = (otpRef[1].current !== null && otpRef[1].current.value !== '') && (otpRef[2].current !== null && otpRef[2].current.value !== '')  && (otpRef[3].current !== null && otpRef[3].current.value !== '') && (otpRef[4].current !== null && otpRef[4].current.value !== '') ? false : true;

  return (
    <div className="layout">
      <div className="container p-3">
        <div className="row justify-content-center">
          <div className="col-sm-6 registerContainer">
            <div className="position-relative">
              <div className='card shadow-sm' style={slideAnimation.left}>
                <div className="form-group">
                  <label htmlFor="mobileNumber">Mobile Number</label>
                  <input type="tel" className="form-control" id="mobileNumber" placeholder="Enter Mobile Number" ref={mobileNum} />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleNext}>Next</button>
              </div>
              <div className='card shadow-sm' style={slideAnimation.right}>
                <div className=" mb-2">
                  <div className="form-group mb-0">
                    <label>Enter OTP</label>
                    <div className="otpContainer">
                      <input type="text" className="form-control otpInput" onChange={(e) => handleOtpChange(e, 1)} id="otp1" maxLength={1} ref={otpRef[1]} />
                      <input type="text" className="form-control otpInput" onChange={(e) => handleOtpChange(e, 2)} id="otp2" maxLength={1} ref={otpRef[2]} />
                      <input type="text" className="form-control otpInput" onChange={(e) => handleOtpChange(e, 3)} id="otp3" maxLength={1} ref={otpRef[3]} />
                      <input type="text" className="form-control otpInput" onChange={(e) => handleOtpChange(e, 4)} id="otp4" maxLength={1} ref={otpRef[4]} />
                    </div>
                  </div>
                </div>
                <div className="resendOtpContainer mb-2">
                  {resendOtp > 0 ? 
                  <p>Resend OTP in {resendOtp}</p>
                  :
                  <button type="button" className="btn btn-link" onClick={handleResendOtp}>Resend OTP</button>
                  }
                </div>
                <div className="btnContainer">
                  <button type="button" className="btn btn-primary" onClick={handleBack}>Back</button>
                  <button type="button" className="btn btn-primary" onClick={handleSubmit} disabled={disableSubmit}>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;