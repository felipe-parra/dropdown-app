import { string, number } from "prop-types";

const Item = ({ id, createdAt, clientName, amount, userName, teamName }) => {
  return (
    <tr className="d-flex">
      <td>{id}</td>
      <td>{new Date(createdAt).toISOString().slice(0, 19)}</td>
      <td>{clientName}</td>
      <td>{amount}</td>
      <td>{teamName}</td>
      <td>{userName}</td>
    </tr>
  );
};

Item.propTypes = {
  id: number.isRequired,
  createdAt: string.isRequired,
  clientName: string.isRequired,
  amount: number.isRequired,
  userName: string.isRequired,
  teamName: string.isRequired,
};

Item.defaultProps = {
  id: 0,
  createdAt: "",
  clientName: "",
  amount: 0,
  userName: "",
  teamName: "",
};

export default Item;
