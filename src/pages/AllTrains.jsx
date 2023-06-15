// AllTrains.js

import React, { useEffect, useState } from 'react';
import { getAllTrains } from '../api';
import TrainCard from '../components/TrainCard';

function AllTrains() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const authorizationToken = 'YOUR_AUTH_TOKEN'; // Replace with the actual authorization token
        const data = await getAllTrains(authorizationToken);
        setTrains(data);
      } catch (error) {
        console.error('Error fetching trains:', error);
      }
    };

    fetchTrains();
  }, []);

  return (
    <div>
      <h2>All Trains</h2>
      {trains.map((train) => (
        <TrainCard key={train.trainNumber} train={train} />
      ))}
    </div>
  );
}

export default AllTrains;
