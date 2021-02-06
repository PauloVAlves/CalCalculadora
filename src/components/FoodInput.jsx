import React, { useState } from 'react';
import NameList from './NameList';

const FoodInput = ({ foods, addToTable }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [foodItem, setFoodItem] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert('O nome é obrigatório');
      return;
    }

    if (!quantity) {
      alert('A quantidade é obrigatória');
      return;
    }
    console.log(name);
    console.log(quantity);
    foods.map(
      (food) =>
        food.description === name &&
        addToTable({
          id: food.id,
          foodname: food.description,
          calories: food.attributes.energy.kcal,
          base: food.base_qty,
          quantity: quantity,
        })
    );
    /* addToTable(foodItem); */

    setName('');
    setQuantity('');
  };
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='addName'>Alimento:</label>
      <input
        autoComplete='false'
        type='text'
        name='foodName'
        list='names-list'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <NameList foods={foods} />
      <label htmlFor='addQuantity'>Quantidade</label>
      <input
        autoComplete='false'
        type='number'
        name='add-quantity'
        id='add-quantity'
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input type='submit' value='Adicionar' />
    </form>
  );
};

export default FoodInput;
