import React from 'react';

const Button = (props) => {
  return(
    <button type="button" className={props.className} onClick={props.onClick} disabled={props.disabled || props.loading}>
      {props.loading === true && <div className="spinner-border spinner-border-sm mr-2" role="status"></div>}
      {props.children}
    </button>
  )
}

export default Button;