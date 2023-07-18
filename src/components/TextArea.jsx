import React from "react";

export const TextArea = ({
  label,
  labelClassNames,
  cols,
  rows,
  value,
  classNames,
  ...rest
}) => {
  return (
    <>
      <label
        htmlFor="favorite-description"
        name="favorite-description"
        className={`${labelClassNames}`}
      >
        {label}
      </label>
      <textarea
        id={"favorite-description"}
        cols={cols}
        rows={rows}
        value={value}
        className={`${classNames}`}
        {...rest}
      />
    </>
  );
};
