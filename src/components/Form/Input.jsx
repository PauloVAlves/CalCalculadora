import styled from 'styled-components';
import Label from './Label';
import NamesList from './NamesList';
import Button from './Button';

const Input = ({ name, setName, quantity, setQuantity, onSubmit }) => {
  let buttonName = 'Adicionar';
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
      <QuantityForm>
        <NumberInput
          className='food-quantity'
          type='number'
          name='add-quantity'
          id='add-quantity'
          palceholder='em gramas'
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <Button onSubmit={onSubmit} buttonName={buttonName} />
      </QuantityForm>
    </>
  );
};

const StyledInput = styled.input.attrs((props) => ({
  placeholder: 'comece a digitar',
  autocomplete: 'off',
}))`
  box-sizing: border-box;
  display: block;
  font-size: 1.1rem;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-right: auto;
  margin-left: auto;
  transition: 0.15s;
  text-align: center;
  outline: none;
  transition: all .5s ease-in-out;
  
  &:hover {
    transition: all .5s ease-in-out;
    border: 1px solid #000;
  }

  @media (max-width: 900px) {
    font-size: 1.2rem;
    display: block;
  }
`;

const FoodInput = styled(StyledInput)`
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 900px) {
    width: 100%;
    margin: auto;
    margin-bottom: 10px;
  }
`;

const QuantityForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;

  Button {
    width: 45%;
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

const NumberInput = styled(StyledInput).attrs((props) => ({
  placeholder: 'em gramas',
}))`
  position: relative;
  width: 45%;
  margin-left: 0px;
  margin-right: 0px;

  @media (max-width: 900px) {
    width: 80%;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export default Input;
