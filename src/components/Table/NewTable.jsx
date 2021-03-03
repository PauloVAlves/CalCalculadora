import { useContext } from 'react';
import styled from 'styled-components';
import { DataContext } from '../../data/DataContext';
import Food from './Food';
import Button from '../Form/Button';

const NewTable = () => {
  const { toCalculateList, deleteTable } = useContext(DataContext);

  if (toCalculateList.length > 0) {
    return (
      <TableForm>
        <Table>
          {toCalculateList.map((food) => (
            <Food key={food.id} food={food} />
          ))}
        </Table>
        <div className='btn'>
          <Button buttonName='Limpar' onSubmit={deleteTable} />
        </div>
      </TableForm>
    );
  } else {
    return (
      <Table>
        <h3>Nenhum alimento foi adicionado à receita</h3>
      </Table>
    );
  }
};

const TableForm = styled.div`
  max-width: 50%;
  margin: auto;

  .btn {
    display: flex;
    justify-content: flex-end;
  }

  Button {
    background-color: #dd2222;
    margin-left: auto;
  }

  Button:hover {
    background-color: #aa4444;
  }
`;

const Table = styled.div`
  display: block;
  cursor: pointer;
  max-width: 100%;
  margin: auto;
  margin-bottom: 10px;
  text-align: left;

  h3 {
    text-align: center;
  }

  @media (max-width: 900px) {
    max-width: 90%;
  }
`;

export default NewTable;
