import { array } from "prop-types";
import Item from "./Item";

const Grid = ({ array }) => {
  if (array.length === 0) return null;
  return (
    <table>
      <thead>
        <th>Id</th>
        <th>Fecha Venta</th>
        <th>Nombre Cliente</th>
        <th>Monto Venta</th>
        <th>Nombre Equipo</th>
        <th>Nombre Usuario</th>
      </thead>

      {array.map(
        ({ id, createdAt, clientName, amount, userName, teamName }) => (
          <Item
            className="d-flex"
            id={id}
            createdAt={createdAt}
            clientName={clientName}
            amount={amount}
            userName={userName}
            teamName={teamName}
            key={`key-grid-item-${id}`}
          />
        )
      )}
    </table>
  );
};

Grid.propTypes = {
  array: array.isRequired,
};
Grid.defaultProps = {
  array: [],
};
export default Grid;
