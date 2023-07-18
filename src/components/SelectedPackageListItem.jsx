import React from "react";
import { TrashIcon } from "@heroicons/react/20/solid";

export const SelectedPackageListItem = ({
  index,
  packageName,
  className,
  onDelete = () => {},
}) => {
  return (
    <>
      {index === 0 && (
        <div className="flex">
          <div className="flex-1 border-r-0 border-l-2 p-2 border-t-2 border-b-0 pl-2 pr-4">
            <label htmlFor={packageName} className={"font-bold"}>
              Package Name
            </label>
          </div>
          <div className="flex-1 border-r-2 border-l-2 p-2 border-t-2 border-b-0 pl-2">
            <label htmlFor={packageName} className={"font-bold"}>
              Actions
            </label>
          </div>
        </div>
      )}

      <div className="flex overflow-y-scroll">
        <div className="pl-2 flex-1 border-r-2 border-l-2 p-2 border-t-2 border-b-2">
          <label htmlFor={packageName} className={`${className}`}>
            {packageName}
          </label>
        </div>
        <div className="flex-1 border-r-2 border-b-2 border-t-2 flex items-center pl-2">
          <button
            onClick={() => {
              console.log("packageName: ", packageName);
              onDelete(packageName);
            }}
            className="text-slate-400 h-5 w-5"
          >
            <TrashIcon />
          </button>
        </div>
      </div>
    </>
  );
};
