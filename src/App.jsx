import React, { useState, useEffect } from 'react';
import Navbar from './components/Nav/Navbar';
import Form from './components/Form/Form';
import FoodTable from './components/Table/FoodTable';
import Calculate from './components/Form/Calculate';
import Footer from './components/Footer';

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

  function addToList(name, quantity) {
    foods.forEach((food) => {
      if (food.description === name) {
        const newItem = {
          id: food.id,
          foodName: food.description,
          cal: food.attributes.energy.kcal,
          base: food.base_qty,
          quantity: Number(quantity),
        };
        setToCalculateList([...toCalculateList, newItem]);
      }
    });
  }

  toCalculateList.map((food) => console.log(food));

  const deleteItem = (id) => {
    setToCalculateList(toCalculateList.filter((food) => food.id !== id));
  };

  return (
    <div className='App'>
      <Navbar />
      <Form foods={foods} addToTable={addToList} />
      <FoodTable listTable={toCalculateList} deleteItem={deleteItem} />
      <Calculate calculateList={toCalculateList} />
      <Footer />
    </div>
  );
}

export default App;
