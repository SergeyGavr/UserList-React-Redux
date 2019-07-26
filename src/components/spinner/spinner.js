import React from 'react';

import './spinner.css';

const Spinner = () => {
  return (
  <React.Fragment>
    <div className="lds-css ng-scope">
      <div className="lds-double-ring">
        <div></div>
        <div></div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  </React.Fragment>
  )
}

export default Spinner;