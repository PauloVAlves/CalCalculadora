import React, { useState, useEffect, createContext } from 'react';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const API_URL = 'https://floating-lowlands-85751.herokuapp.com/v1/api/food';

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [foods, setFoods] = useState([]);
  const [toCalculateList, setToCalculateList] = useState([]);
  const [portion, setPortion] = useState('');
  const [finalResult, setFinalResult] = useState(-1);
  const [recipeTotalCalories, setRecipeTotalCalories] = useState(-1);

  useEffect(() => {
    const fetchNames = () => {
      fetch(API_URL, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setFoods(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    };

    fetchNames();
  }, []);

  function addToList(name, quantity) {
    foods.forEach((food) => {
      if (food.name === name) {
        const newItem = {
          id: food.id,
          foodName: food.name,
          cal: food.kcal,
          quantity: Number(quantity),
        };
        setToCalculateList([...toCalculateList, newItem]);
      }
    });
  }

  const deleteItem = (id) => {
    setToCalculateList(toCalculateList.filter((food) => food.id !== id));
    setFinalResult(-1);
    setRecipeTotalCalories(-1);
    toCalculateList < 1 && setPortion('');
  };

  const deleteTable = () => {
    setToCalculateList([]);
    setFinalResult(-1);
    setRecipeTotalCalories(-1);
    setPortion('');
  };
  return (
    <DataContext.Provider
      value={{
        error,
        isLoaded,
        foods,
        toCalculateList,
        addToList,
        deleteItem,
        deleteTable,
        finalResult,
        setFinalResult,
        recipeTotalCalories,
        setRecipeTotalCalories,
        portion,
        setPortion,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
