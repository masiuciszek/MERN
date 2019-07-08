/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import ProfileTop from './ProfileTop';
import { getProfileById } from '../../actions/profile';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth: { loading: authLoading, isAuthenticated, user },
  match,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);
  return (
    <div className="push-down">
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <>
          <Link to="/profiles" className="btn btn-light">
            Back to profiles
          </Link>
          {isAuthenticated &&
            authLoading === false &&
            user._id === profile.user._id && (
              <Link to="/edit-profile" className="btn btn-dark">
                Edit profile
              </Link>
            )}

          <div className="profile-grid my-1">
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
            <div className="profile-exp bg-white p-2">
              <h2 className="text-primary">Experience</h2>
              {profile.experience.length > 0 ? (
                <>
                  {' '}
                  {profile.experience.map(exp => (
                    <ProfileExperience key={exp._id} experience={exp} />
                  ))}{' '}
                </>
              ) : (
                <h4>No experience credentials</h4>
              )}
            </div>
            <div className="profile-edu bg-white p-2">
              <h2 className="text-primary">Education</h2>
              {profile.education.length > 0 ? (
                <>
                  {' '}
                  ({' '}
                  {profile.education.map(edu => (
                    <ProfileEducation key={edu._id} education={edu} />
                  ))}{' '}
                  ){' '}
                </>
              ) : (
                <>
                  {' '}
                  <h4>No Education Given</h4>{' '}
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { getProfileById }
)(Profile);
