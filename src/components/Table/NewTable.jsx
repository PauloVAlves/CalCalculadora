import { useContext } from 'react';
import styled from 'styled-components';
import { DataContext } from '../../data/DataContext';
import Food from './Food';

const NewTable = () => {
  const { toCalculateList } = useContext(DataContext);
  return (
    <Table>
      {toCalculateList.length > 0 ? (
        toCalculateList.map((food) => <Food key={food.id} food={food} />)
      ) : (
        <h3>Nenhum alimento foi adicionado à receita</h3>
      )}
    </Table>
  );
};

const Table = styled.div`
  display: block;
  max-width: 50%;
  margin: auto;
  text-align: left;
  cursor: pointer;

  h3 {
    text-align: center;
  }

  @media (max-width: 900px) {
    max-width: 90%;
  }
`;

export default NewTable;
