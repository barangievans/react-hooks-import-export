import React from 'react';
import { username, city } from '../data/user'; // Adjust path for named imports

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Username: {username}</p>
      <p>City: {city}</p>
    </div>
  );
};

export default Home;

