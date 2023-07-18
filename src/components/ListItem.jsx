import React from "react";

export const ListItem = ({ itemData, className, onSelect = () => {} }) => {
  return (
    <div className="flex gap-2">
      <input
        type="radio"
        value={itemData?.package?.name}
        id={itemData?.package?.name}
        name={itemData?.package?.name}
        onChange={({ currentTarget: { value } }) => {
          onSelect(value);
        }}
      />
      <label htmlFor={itemData?.package?.name} className={`${className}`}>
        {itemData?.package?.name}
      </label>
    </div>
  );
};
