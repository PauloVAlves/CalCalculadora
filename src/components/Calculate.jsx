import { useState } from 'react';

const Calculate = ({ calculateList }) => {
  const [portion, setPortion] = useState('');
  const [finalResult, setFinalResult] = useState('');
  const [recipeTotalCalories, setRecipeTotalCalories] = useState('');

  const calcular = (e) => {
    e.preventDefault();
    let totalGrams = 0;
    let getCaloriesPortion = 0;
    let totalCalories = 0;
    let totalRecipeCalories = 0;
    let setCaloriesPortion = 0;

    calculateList.forEach((food) => {
      totalGrams += food.quantity;
      getCaloriesPortion = food.quantity / food.base;
      setCaloriesPortion = food.cal * getCaloriesPortion;
      totalCalories += setCaloriesPortion;
      totalRecipeCalories += food.cal;
    });

    let div = totalGrams / portion;
    let calculatedCalories = totalCalories / div;
    setFinalResult(calculatedCalories);
    setRecipeTotalCalories(totalRecipeCalories);
  };

  return (
    <>
      <form onSubmit={calcular}>
        <input
          type='number'
          name='calculate'
          id='calculate'
          value={portion}
          onChange={(e) => setPortion(e.target.value)}
        />
        <input type='submit' value='Calcular' />
      </form>

      {finalResult !== '' && (
        <>
          <h4>Calorias totais: {recipeTotalCalories.toFixed(1)}</h4>
          <h2>Calorias por porção: {finalResult.toFixed(1)}</h2>
        </>
      )}
    </>
  );
};

export default Calculate;
