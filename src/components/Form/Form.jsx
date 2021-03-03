import { useContext, useState } from 'react';
import { DataContext } from '../../data/DataContext';
import styled from 'styled-components';
import Input from './Input';
import NamesList from './NamesList';
import Button from './Button';

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
        label='Alimento'
        className='food-name'
        type='text'
        name='foodName'
        list='names-list'
        placeholder='Selecione o alimento'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <NamesList />
      <Input
        label='Quantidade'
        className='food-quantity'
        type='number'
        name='add-quantity'
        id='add-quantity'
        placeholder='em gramas'
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <Button onSubmit={onSubmit} buttonName={buttonName} />
    </AddFoodForm>
  );
};

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

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    Button {
      width: 80%;
    }
  }
`;

export default Form;
