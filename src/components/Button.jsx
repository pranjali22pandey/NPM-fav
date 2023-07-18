import React from "react";

export const Button = ({ classNames, title, ...rest }) => {
  return (
    <input
      className={`${classNames}`}
      type="submit"
      value={`${title}`}
      {...rest}
    />
  );
};
