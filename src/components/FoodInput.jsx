import NameList from './NameList';
const FoodInput = ({ foods }) => {
  return (
    <form>
      <label htmlFor='addName'>Alimento:</label>
      <input type='text' name='foodName' list='names-list' />
      <NameList foods={foods} />
      <label htmlFor='addQuantity'>Quantidade</label>
      <input type='number' name='add-quantity' id='add-quantity' />
    </form>
  );
};

export default FoodInput;
