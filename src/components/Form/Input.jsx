import styled from 'styled-components';
import Label from './Label';
import NamesList from './NamesList';

const StyledInput = styled.input.attrs({
  autocomplete: 'off',
})`
  font-size: 1.1rem;
  padding: 10px;
  border: 1px solid;
  border-radius: 10px;
  margin-bottom: 0;
  transition: 0.15s;
  text-align: center;
  margin-right: 30px;

  @media (max-width: 768px) {
    font-size: 1rem;
    display: block;
    max-width: 100%;
  }
`;

const FoodInput = styled(StyledInput)`
  width: 560px;

  @media (max-width: 1070px) {
    width: 80%;
    margin: auto;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
    margin-bottom: 10px;
  }
`;

const NumberInput = styled(StyledInput)`
  width: 120px;

  @media (max-width: 768px) {
    width: 40%;
    margin: auto;
    margin-bottom: 10px;
  }
`;

const Input = ({ name, setName, quantity, setQuantity, foods }) => {
  return (
    <>
      <Label htmlFor='addName' labelValue='Alimento'>
        Alimento
      </Label>
      <FoodInput
        className='food-name'
        type='text'
        name='foodName'
        list='names-list'
        palceholder='Selecione o alimento'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <NamesList foods={foods} />
      <Label htmlFor='addQuantity' labelValue='Quantidade'>
        Quantidade
      </Label>
      <NumberInput
        className='food-quantity'
        type='number'
        name='add-quantity'
        id='add-quantity'
        palceholder='em gramas'
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
    </>
  );
};

export default Input;
