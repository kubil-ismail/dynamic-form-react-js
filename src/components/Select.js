import React from "react";

function Select(props) {
  const {
    id,
    label,
    name,
    placeholder,
    handleSelect,
    handleBlur,
    helperText,
    error,
    value,
    grid,
    options,
  } = props;
  return (
    <div className={`col-md-${grid}`}>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <select
        id={id}
        name={name}
        className={`form-select ${error && "is-invalid"}`}
        onChange={(e) => handleSelect(e.target.value)}
        onBlur={handleBlur}
        value={value}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((val, key) => (
          <option value={val.value} key={key}>
            {val.label}
          </option>
        ))}
      </select>
      <small className="text-danger">{helperText}</small>
    </div>
  );
}

export default Select;
