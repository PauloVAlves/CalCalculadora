import { useContext } from 'react';
import {DataContext} from '../../data/DataContext';

const NamesList = () => {
  const { foods } = useContext(DataContext);
  return (
    <datalist className='name-list' id='names-list'>
      {foods.map((food) => (
        <option key={food.id}>{food.description}</option>
      ))}
    </datalist>
  );
};

export default NamesList;
