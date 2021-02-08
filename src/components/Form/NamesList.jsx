import styled from 'styled-components';

const Names = styled.datalist`
  width: 560px;
  font-size: 1.1rem;
  padding: 10px;
  border: 1px solid;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const NamesList = ({ foods }) => {
  return (
    <Names className='name-list' id='names-list'>
      {foods.map((food) => (
        <option key={food.id}>{food.description}</option>
      ))}
    </Names>
  );
};

export default NamesList;
