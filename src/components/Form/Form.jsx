import { useContext, useState } from 'react';
import { DataContext } from '../../data/DataContext';
import styled from 'styled-components';
import Input from './Input';
import Button from './Button';

const AddFoodForm = styled.form`
  margin-top: 50px;
  margin-bottom: 25px;
  text-align: center;
`;

const Form = () => {
  const { addToList } = useContext(DataContext);
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

    addToList(name, quantity);

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
      />
      <Button onSubmit={onSubmit} buttonName={buttonName} />
    </AddFoodForm>
  );
};

export default Form;
