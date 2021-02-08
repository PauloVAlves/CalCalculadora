import styled from 'styled-components';
import Food from './Food';

const Table = styled.table`
  width: 70%;
  margin-left: 15%;
  margin-right: 15%;
  border-collapse: collapse;
  font-size: 1.3rem;
  min-width: 60%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);

  thead {
    tr {
      background-color: #0161e8;
      color: #fff;
      text-align: left;
    }
  }

  th,
  td {
    padding: 12px 15px;
  }

  tbody {
    tr {
      border-bottom: 1px solid #ddd;
    }
  }

  tbody {
    tr:nth-of-type(even) {
      background-color: #f3f3f3;
    }
  }

  tbody {
    tr:last-of-type {
      border-bottom: 2px solid #290cff;
    }
  }
`;

const FoodTable = ({ listTable, deleteItem }) => {
  return (
    <Table>
      <thead>
        <tr>
          <td>Alimento</td>
          <td style={{ width: '10%' }}>Quantidade</td>
          <td style={{ width: '10%' }}>Ações</td>
        </tr>
      </thead>
      <tbody className='table-body'>
        {listTable.length > 0 ? (
          listTable.map((food) => (
            <Food key={food.id} food={food} deleteItem={deleteItem} />
          ))
        ) : (
          <tr>
            <td>Nenhum alimento foi adicionado à receita</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default FoodTable;
