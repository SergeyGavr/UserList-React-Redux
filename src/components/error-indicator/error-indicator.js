import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <React.Fragment>
      <div className="error">
        <img src='https://image.flaticon.com/icons/png/512/40/40236.png' alt='error'/>
      </div>
      <div className="alert alert-dismissible alert-danger mb-5 error">
        
      Something went wrong! Retry a few minutes later, please.
      </div>
    </React.Fragment>
    
  )
}

export default ErrorIndicator;