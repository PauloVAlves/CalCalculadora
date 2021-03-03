import { useContext } from 'react';
import { DataContext } from '../../data/DataContext';
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';

const Calculate = () => {
  const {
    toCalculateList,
    finalResult,
    setFinalResult,
    recipeTotalCalories,
    setRecipeTotalCalories,
    portion,
    setPortion,
  } = useContext(DataContext);

  let totalGrams = 0;
  let getCaloriesPortion = 0;
  let totalCalories = 0;
  let totalRecipeCalories = 0;
  let setCaloriesPortion = 0;
  const base_for_calc = 100;

  const calcular = (e) => {
    e.preventDefault();

    if (toCalculateList.length < 1) {
      alert('Não há ingredientes na receita.');
      return;
    } else {
      toCalculateList.forEach((food) => {
        totalGrams += food.quantity;
        getCaloriesPortion = food.quantity / base_for_calc;
        setCaloriesPortion = food.cal * getCaloriesPortion;
        totalCalories += setCaloriesPortion;
        totalRecipeCalories += setCaloriesPortion;
      });

      let div = totalGrams / portion;
      let calculatedCalories = totalCalories / div;
      setFinalResult(calculatedCalories);
      setRecipeTotalCalories(totalRecipeCalories);
    }
  };

  return (
    <>
      <CalculateForm onSubmit={calcular}>
        <Input
          label='Porção'
          className='calculate'
          type='number'
          name='calculate'
          placeholder='em gramas'
          id='calculate'
          value={portion}
          onChange={(e) => setPortion(e.target.value)}
        />
        <Button onSubmit={calcular} buttonName='Calcular' />
      </CalculateForm>

      {finalResult >= 0 && (
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

const CalculateForm = styled.form`
  width: 30%;
  margin: 30px auto;
  text-align: left;
  display: flex;
  flex-direction: column;

  Button {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  @media (max-width: 900px) {
    margin: 20px auto;
    width: 90%;

    Button {
      width: 80%;
    }
  }
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
  margin-bottom: 100px;
`;

export default Calculate;
