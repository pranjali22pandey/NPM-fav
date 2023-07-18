import React from "react";

export const SearchInput = ({
  label,
  value,
  labelClassNames,
  classNames,
  onChange,
  ...rest
}) => {
  return (
    <>
      <p className={`${labelClassNames}`}>{label}</p>
      <input
        type="input"
        value={value}
        className={`${classNames}`}
        onChange={({ target: { value } }) => onChange(value)}
        {...rest}
      />
    </>
  );
};
