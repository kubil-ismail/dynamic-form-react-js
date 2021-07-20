import React from "react";

function TextField(props) {
  const {
    id,
    label,
    name,
    type,
    placeholder,
    handleChange,
    handleBlur,
    helperText,
    error,
    value,
    grid,
  } = props;
  return (
    <div className={`col-md-${grid}`}>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        className={`form-control ${error && "is-invalid"}`}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <small className="text-danger">{helperText}</small>
    </div>
  );
}

export default TextField;
