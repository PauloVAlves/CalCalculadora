import { useState } from 'react';
import NameList from './NameList';

const FoodInput = ({ foods, addToTable }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

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

    addToTable(name, quantity);

    setName('');
    setQuantity('');
  };
  return (
    <form>
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
      <button value='Adicionar' onClick={onSubmit}>
        add
      </button>
    </form>
  );
};

export default FoodInput;
