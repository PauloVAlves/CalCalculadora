import { FaTimes } from 'react-icons/fa';

const Food = ({ food, deleteRow }) => {
  return (
    <tr>
      <td>{food.foodname}</td>
      <td>{food.quantity}</td>
      <td>
        <FaTimes onClick={() => deleteRow(food.id)} />
      </td>
    </tr>
  );
};

export default Food;
