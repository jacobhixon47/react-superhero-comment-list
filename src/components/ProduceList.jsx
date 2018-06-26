import React from 'react';
import availableProduce from '../data/availableProduce';

let date = new Date();
let produce = availableProduce[date.getMonth()].selection;
let month = availableProduce[date.getMonth()].month;

function ProduceList() {
  return (
    <div style={{
      border: '1px solid green',
      padding: '2%',
      flex: '1 0 auto',
      height: '80vh'
    }}>
      <h1><u>Available Produce for {month}</u></h1>
      {produce.map((item, index) =>
        <div key={index}>
          <h3>{item}</h3>
        </div>
      )}
    </div>
  );
}

export default ProduceList;
