// src/JokeGenerator.js
import React, { useState } from 'react';
import axios from 'axios';

const JokeGenerator = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJoke = () => {
    setLoading(true);
    setError(null);

    // Fetch a random joke from the API
    axios
      .get('https://official-joke-api.appspot.com/random_joke')
      .then((response) => {
        setJoke(`${response.data.setup} - ${response.data.punchline}`);
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to fetch a joke. Please try again later.');
        setLoading(false);
      });
  };

  return (
    <div className="joke-generator">
      <h2>Random Joke Generator</h2>
      <button onClick={fetchJoke} disabled={loading}>
        {loading ? 'Fetching...' : 'Get a Joke'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {joke && <p style={{ marginTop: '20px' }}>{joke}</p>}
    </div>
  );
};

export default JokeGenerator;
