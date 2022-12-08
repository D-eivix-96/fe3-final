import React from 'react';
import Card from '../Components/Card';
import { useEffect, useState } from "react";

const Home = () => {
  const [dentist, setDentist] = useState([]);

  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setDentist(data));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        {dentist.length
          ? dentist.map((dentist) => (
              <Card {...dentist} key={dentist.id} />
            ))
          : null}
      </div>
    </>
  );
};

export default Home;