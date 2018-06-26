import React from 'react';
import Location from './Location';
import marketSchedule from '../data/marketSchedule';

let date = new Date();
let today = marketSchedule[date.getDay()];

function LocationList() {
  return (
    <div style={{
      padding: '2%',
      border: '1px solid blue',
      height: '80vh',
      flex: '1 0 auto'
    }}>
      <Location day={today.day} location={today.location} hours={today.hours} booth={today.booth} />
    </div>
  );
}

export default LocationList;
