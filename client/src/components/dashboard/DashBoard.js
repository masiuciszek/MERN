/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import DashBoardAction from './DashBoardAction';
import Experience from './Experience';
import Education from './Education';

const DashBoard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return (
    // if profile is null and still loading
    loading && profile === null ? (
      <Spinner />
    ) : (
      <div className="push-down">
        <h1 className="large text-primary">DashBoard</h1>{' '}
        <p className="lead">
          <i className="fa fa-user" /> Welcome {user && user.name}
          {/* if user then show user name */}
        </p>
        {profile !== null ? (
          <>
            {' '}
            <h3>
              <DashBoardAction />
              <Experience experience={profile.experience} />
              <Education education={profile.education} />
              <div className="my-2">
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => deleteAccount()}
                >
                  <i className="fas fa-user minus"></i> Delete My Account
                </button>
              </div>
            </h3>{' '}
          </>
        ) : (
          <>
            <h3>Yoy have not yes set up a Profile</h3>
            <Link to="/create-profile" className="btn btn-primary my-1">
              {' '}
              Create Profile{' '}
            </Link>
          </>
        )}
      </div>
    )
  );
};

DashBoard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(DashBoard);
