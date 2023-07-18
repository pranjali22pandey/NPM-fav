import React, { memo, useMemo } from "react";
import { SelectedPackageListItem } from "./SelectedPackageListItem";

const randomNumber =
  Math.floor(Math.random() * (100000 - 1) + 1) + "-" + new Date().getTime();

export const SelectedPackagesList = memo(
  ({
    packages,
    listClassNames,
    itemClassNames,
    listType = "list",
    onDelete = () => {},
  }) => {
    return (
      <div className={`${listClassNames}`}>
        <div>
          {packages?.map((packageName, index) => (
            <React.Fragment key={`${listType}-${randomNumber}-${index}`}>
              <SelectedPackageListItem
                index={index}
                className={`${itemClassNames}`}
                packageName={packageName}
                onDelete={(value) => onDelete(value)}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }
);
