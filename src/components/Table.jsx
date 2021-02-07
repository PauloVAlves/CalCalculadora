import Food from './Food';

const Table = ({ listTable, deleteItem }) => {
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
    </table>
  );
};

export default Table;
