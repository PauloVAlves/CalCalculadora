import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FoodInput from './components/FoodInput';
import './App.css';

function App() {
  const API_URL = 'http://localhost:4000/api/v1/food';

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchNames = async () => {
      const res = await fetch(API_URL, {
        method: 'GET',
        'Access-Control-Allow-Origins': '*',
        'Access-Control-Allow-Credentials': true,
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-type': 'application/json',
        },
      });
      const data = await res.json();
      setFoods(data);
    };

    fetchNames();
  }, []);

  return (
    <div className='App'>
      <Header />
      <FoodInput foods={foods} />
    </div>
  );
}

export default App;
