// TrainCard.js

import React from 'react';

function TrainCard({ train }) {
  return (
    <div>
      <h3>{train.trainName}</h3>
      <p>Train Number: {train.trainNumber}</p>
      <p>Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}</p>
      <p>Sleeper Seats Available: {train.seatsAvailable.sleeper}</p>
      <p>AC Seats Available: {train.seatsAvailable.AC}</p>
      <p>Price: Sleeper - {train.price.sleeper}, AC - {train.price.AC}</p>
      <p>Delayed By: {train.delayedBy} minutes</p>
    </div>
  );
}

export default TrainCard;
