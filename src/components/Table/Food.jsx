import { FaTimes } from 'react-icons/fa';

const Food = ({ food, deleteItem }) => {
  return (
    <tr className='food-row'>
      <td>{food.foodName}</td>
      <td>{food.quantity}</td>
      <td>
        <FaTimes onClick={() => deleteItem(food.id)} />
      </td>
    </tr>
  );
};

export default Food;
