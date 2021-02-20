import styled from 'styled-components';
import Label from './Label';
import NamesList from './NamesList';

const StyledInput = styled.input.attrs((props) => ({
  placeholder: 'comece a digitar',
  autocomplete: 'off',
}))`
  display: block;
  font-size: 1.1rem;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  transition: 0.15s;
  text-align: center;

  &:hover {
    border: 1px solid #000;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    display: block;
    max-width: 100%;
  }
`;

const FoodInput = styled(StyledInput)`
  width: 560px;
  display: inline-block;
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

const NumberInput = styled(StyledInput).attrs((props) => ({
  placeholder: 'em gramas',
}))`
  width: 140px;
  display: inline-block;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 40%;
    margin: auto;
    margin-bottom: 10px;
  }
`;

const Input = ({ name, setName, quantity, setQuantity }) => {
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
      <NamesList />
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
