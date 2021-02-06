import Food from './Food'

const Table = ({CalculateTable, deleteRow}) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Alimento</td>
          <td>Quantidade</td>
          <td>Ações</td>
        </tr>
      </thead>
      <tbody className='table-body'>
        {CalculateTable.length > 0 ? CalculateTable.map((food) => (
        <Food key={food.id} food={food} deleteRow={deleteRow}/>
          )) : <tr><td>Nenhum alimento foi adicionado à receita</td></tr>}
      </tbody>
    </table>
  );
};

export default Table;
