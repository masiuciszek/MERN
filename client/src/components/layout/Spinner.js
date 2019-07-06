import React from 'react';
import './spinner.css';

const Spinner = () => (
  <div className="overlay">
    <div className="overlayDoor"></div>
    <div className="overlayContent">
      <div className="loader">
        <div className="inner"></div>
      </div>
      {/* <div className="skip">SKIP</div> */}
    </div>
  </div>
);

export default Spinner;
