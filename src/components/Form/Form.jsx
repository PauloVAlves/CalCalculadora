import { useContext, useState } from 'react';
import { DataContext } from '../../data/DataContext';
import styled from 'styled-components';
import Input from './Input';

const AddFoodForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: 25px;
  text-align: left;

  @media (max-width: 900px) {
    min-width: 90%;
  }
`;

const Form = () => {
  const { addToList } = useContext(DataContext);
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
        onSubmit={onSubmit}
      />
    </AddFoodForm>
  );
};

export default Form;
