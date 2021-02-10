import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const CalculateForm = styled.form`
  margin-top: 30px;
  text-align: center;
`;

const PortionInput = styled.input`
  font-size: 1.1rem;
  padding: 10px;
  border: 1px solid;
  border-radius: 10px;
  margin-bottom: 0;
  transition: 0.15s;
  text-align: center;
  margin-right: 30px;
  width: 120px;
`;

const PrintTotalResult = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 30px;
`;

const PrintPortionResult = styled.p`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 900;
  margin-top: 30px;
`;

const Calculate = ({ calculateList }) => {
  const [portion, setPortion] = useState('');
  const [finalResult, setFinalResult] = useState('');
  const [recipeTotalCalories, setRecipeTotalCalories] = useState('');
  let totalGrams = 0;
  let getCaloriesPortion = 0;
  let totalCalories = 0;
  let totalRecipeCalories = 0;
  let setCaloriesPortion = 0;

  const calcular = (e) => {
    e.preventDefault();

    calculateList.forEach((food) => {
      totalGrams += food.quantity;
      getCaloriesPortion = food.quantity / food.base;
      setCaloriesPortion = food.cal * getCaloriesPortion;
      totalCalories += setCaloriesPortion;
      totalRecipeCalories += setCaloriesPortion;
    });

    let div = totalGrams / portion;
    let calculatedCalories = totalCalories / div;
    setFinalResult(calculatedCalories);
    setRecipeTotalCalories(totalRecipeCalories);
  };

  return (
    <>
      <CalculateForm onSubmit={calcular}>
        <PortionInput
          type='number'
          name='calculate'
          id='calculate'
          value={portion}
          onChange={(e) => setPortion(e.target.value)}
        />
        <Button onSubmit={calcular} buttonName='Calcular' />
      </CalculateForm>

      {finalResult !== '' && (
        <>
          <PrintTotalResult>
            Calorias totais: {recipeTotalCalories.toFixed(1)}
          </PrintTotalResult>
          <PrintPortionResult>
            Calorias por porção: {finalResult.toFixed(1)}
          </PrintPortionResult>
        </>
      )}
    </>
  );
};

export default Calculate;
