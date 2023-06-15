import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SingleTrainPage() {
  const { id } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    // Fetch the details of a single train from the API
    const fetchData = async () => {
      try {
        const response = await axios.get(`API_ENDPOINT_FOR_SINGLE_TRAIN/${id}`);
        setTrain(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  if (!train) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{train.name}</h1>
      <p>Departure: {train.departure}</p>
      <p>Price: {train.price}</p>
      {/* Add more train details as needed */}
    </div>
  );
}

export default SingleTrainPage;