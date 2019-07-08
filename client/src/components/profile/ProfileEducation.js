import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description },
}) => (
  <div>
    <h4 className="text-dark">{school}</h4>
    <p>
      <Moment format="YYYY/MM/DD">{from}</Moment> -{' '}
      {!to ? ' Now ' : <Moment format="YYYY/MM/DD">{to}</Moment>}
    </p>
    <p>
      <strong>Degree: </strong> {degree}
    </p>
    <p>
      <strong>description </strong> {description}
    </p>
    <p>
      <strong>field of study: </strong> {fieldofstudy}
    </p>
  </div>
);

ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired,
};

export default ProfileEducation;
