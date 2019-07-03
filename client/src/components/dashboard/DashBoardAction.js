import React from 'react';
import { Link } from 'react-router-dom';

const DashBoardAction = () => (
  <div className="dash-buttons">
    <Link to="/edit-profile" className="btn btn-light">
      <i className="fas fa-user-circle text-primary"></i> Edit Profile
    </Link>
    <Link to="" className="btn btn-light">
      <i className="/add-experience"></i> Add Experience
    </Link>
    <Link to="" className="btn btn-light">
      <i className="/add-education"></i> Add Education
    </Link>
  </div>
);

export default DashBoardAction;
