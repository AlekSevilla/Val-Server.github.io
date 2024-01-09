import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [serverStatus, setServerStatus] = useState('');

  const API_KEY = 'YRGAPI-34a045f4-c472-4c38-8982-9dcb94925649';
  const API_URL = 'https://platform_id.api.riotgames.com/val/status/v1/platform-data';


  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: {
            'X-Riot-Token': API_KEY,
          },
        });
        setServerStatus(response.data);
      } catch (error) {
        console.error('Error fetching server status:', error);
      }
    };

    fetchServerStatus();
  }, [API_KEY, API_URL]);

  return (
    <div className="App">
      <h1>Valorant Server Status</h1>
      <div>
        {serverStatus ? (
          <pre>{JSON.stringify(serverStatus, null, 2)}</pre>
        ) : (
          <p>Loading server status...</p>
        )}
      </div>
    </div>
  );
};

export default App;
