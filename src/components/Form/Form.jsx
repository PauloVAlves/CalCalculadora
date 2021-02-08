import { useState } from 'react';
import styled from 'styled-components';
import Input from './Input';
import Button from './Button';

const AddFoodForm = styled.form`
  margin-top: 50px;
  margin-bottom: 25px;
  text-align: center;
`;

const Form = ({ foods, addToTable }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  let buttonName = 'Adicionar';

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
    <AddFoodForm>
      <Input
        name={name}
        setName={setName}
        quantity={quantity}
        setQuantity={setQuantity}
        foods={foods}
      />
      <Button onSubmit={onSubmit} buttonName={buttonName} />
    </AddFoodForm>
  );
};

export default Form;
