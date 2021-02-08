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
      background-color: #0d32ff;
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

  @media only screen and (max-width: 760px) {
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }
  }

  thead {
    tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
  }

  tr {
    border: 1px solid #ccc;
  }

  td {
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 10%;
  }

  td:before {
    position: absolute;
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
  }

  td:nth-of-type:before {
    content: 'Alimento';
  }
  td:nth-of-type:before {
    content: 'Quantidade';
  }
  td:nth-of-type:before {
    content: 'Ações';
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
