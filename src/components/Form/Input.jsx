import styled from 'styled-components';
import Label from './Label';
import NamesList from './NamesList';

const StyledInput = styled.input.attrs({
  autocomplete: false,
})`
  font-size: 1.1rem;
  padding: 10px;
  border: 1px solid;
  border-radius: 10px;
  margin-bottom: 0;
  transition: 0.15s;
  text-align: center;
  margin-right: 30px;
`;

const FoodInput = styled(StyledInput)`
  width: 560px;
`;

const NumberInput = styled(StyledInput)`
  width: 120px;
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
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
    </>
  );
};

export default Input;
