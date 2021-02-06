import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FoodInput from './components/FoodInput';
import Table from './components/Table';
import './App.css';

function App() {
  const API_URL = 'http://localhost:4000/api/v1/food';

  const [foods, setFoods] = useState([]);
  const [toCalculateList, setToCalculateList] = useState([]);

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

  function addToList(foodItem) {
    setToCalculateList((toCalculateList) => [...toCalculateList, foodItem]);
    addToTable(foodItem);
  }

  const addToTable = (foodItem) => {
    console.log(foodItem);
  };

  const deleteRow = (e) => {
    e.target.closest('tr').remove();
    setToCalculateList.filter((food, id) => food.id !== id);
  };

  return (
    <div className='App'>
      <Header />
      <FoodInput foods={foods} addToTable={addToList} />
      <Table CalculateTable={toCalculateList} deleteRow={deleteRow} />
    </div>
  );
}

export default App;
