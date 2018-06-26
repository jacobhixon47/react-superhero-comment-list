import React from 'react';
import PropTypes from 'prop-types';

function Location(props) {
  return (
    <div>
      <h1>Today is {props.day}</h1>
      <h2>Active Location: {props.location}</h2>
      <h3>{props.hours}</h3>
      <h3>Booth: {props.booth}</h3>
    </div>
  );
}

Location.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Location;
