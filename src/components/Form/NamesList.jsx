const NamesList = ({ foods }) => {
  return (
    <datalist className='name-list' id='names-list'>
      {foods.map((food) => (
        <option key={food.id}>{food.description}</option>
      ))}
    </datalist>
  );
};

export default NamesList;
