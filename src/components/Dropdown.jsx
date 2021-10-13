import React from "react";
import PropTypes from "prop-types";

const Dropdown = ({ name, value, arrayData, disabled, handleChange }) => {
  return (
    <div className="dropdown">
      <select
        name={name}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      >
        {arrayData.length > 0 ? (
          arrayData.map(({ id, name }) => (
            <option key={`key-team-opt-${id}`} value={id}>
              {name}
            </option>
          ))
        ) : (
          <option>Loading...</option>
        )}
        <option>None</option>
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  arrayData: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  name: "",
  value: 1,
  disabled: true,
  arrayData: [],
  handleChange: () => {},
};

export default Dropdown;
