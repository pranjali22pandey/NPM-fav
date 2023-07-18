import React, { useState } from "react";
import { TrashIcon, PencilIcon } from "@heroicons/react/outline";

export const SelectedPackageListItem = ({
  index,
  packageName,
  className,
  onDelete = () => {},
}) => {
  const [editing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(packageName);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    // Perform save or update logic here, e.g., update the name in the state or make an API call
    // You can use the editedName state variable to access the updated package name
    // After saving, you can set editing back to false if needed
    setEditing(false);
  };

  const handleCancel = () => {
    // Handle cancel editing, e.g., reset the edited name or discard changes
    setEditedName(packageName);
    setEditing(false);
  };

  const handleChange = (event) => {
    setEditedName(event.target.value);
  };

  return (
    <>
      {index === 0 && (
        <div className="flex">
          <div className="flex-1 border-r-0 border-l-2 p-2 border-t-2 border-b-0 pl-2 pr-4">
            <label htmlFor={packageName} className="font-bold">
              Package Name
            </label>
          </div>
          <div className="flex-1 border-r-2 border-l-2 p-2 border-t-2 border-b-0 pl-2">
            <label htmlFor={packageName} className="font-bold">
              Actions
            </label>
          </div>
        </div>
      )}

      <div className="flex overflow-y-scroll">
        <div className="pl-2 flex-1 border-r-2 border-l-2 p-2 border-t-2 border-b-2">
          {editing ? (
            <input
              type="text"
              value={editedName}
              onChange={handleChange}
              className={className}
            />
          ) : (
            <label htmlFor={packageName} className={className}>
              {packageName}
            </label>
          )}
        </div>
        <div className="flex-1 border-r-2 border-b-2 border-t-2 flex items-center pl-2">
          {editing ? (
            <>
              <button
                onClick={handleSave}
                className="text-slate-400 h-5 w-5 mr-2"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="text-slate-400 h-5 w-5"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleEdit}
                className="text-slate-400 h-5 w-5 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(packageName)}
                className="text-slate-400 h-5 w-5"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
