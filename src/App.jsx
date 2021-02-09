import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
import Form from './components/Form/Form';
import FoodTable from './components/Table/FoodTable';
import Calculate from './components/Form/Calculate';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const API_URL = 'https://floating-lowlands-85751.herokuapp.com/api/food';

  const [foods, setFoods] = useState([]);
  const [toCalculateList, setToCalculateList] = useState([]);

  useEffect(() => {
    const fetchNames = async () => {
      const res = await fetch(API_URL, {
        method: 'GET',
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
      <Router>
        <Navbar />
        <Route
          path='/'
          exact
          render={(props) => (
            <>
              <Form foods={foods} addToTable={addToList} />
              <FoodTable listTable={toCalculateList} deleteItem={deleteItem} />
              <Calculate calculateList={toCalculateList} />
            </>
          )}
        />
        <Route path='/sobre' component={About} />
        <Route path='/contato' component={Contact} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
