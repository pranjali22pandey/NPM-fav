import React, { memo } from "react";
import { ListItem } from "./ListItem";

const randomNumber =
  Math.floor(Math.random() * (100000 - 1) + 1) + "-" + new Date().getTime();

export const List = memo(
  ({
    isLoading,
    error,
    data,
    heading,
    headingClassNames,
    listClassNames,
    itemClassNames,
    listType = "list",
    onItemSelect = () => {},
    onListScroll = () => {},
  }) => {
    return (
      <div className={`${listClassNames}`}>
        <h3 className={`${headingClassNames}`}>{heading}</h3>
        <Loading isLoading={isLoading} />
        <Error error={error} />
        <Empty data={data?.[0]?.results} />

        <div className="overflow-y-scroll h-40" onScroll={onListScroll}>
          {data?.map((item, index) => (
            <React.Fragment key={`${listType}-${randomNumber}-${index}`}>
              {item?.results?.map((packageObj, pkgIndex) => {
                return (
                  <ListItem
                    key={`package-${pkgIndex}`}
                    className={`${itemClassNames}`}
                    itemData={packageObj}
                    onSelect={(value) => onItemSelect(value)}
                  />
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }
);

const Loading = ({ isLoading }) => {
  return <>{isLoading ? <p>{`Loading...`}</p> : null}</>;
};

const Error = ({ error }) => {
  return <> {error ? <p>{`Oops, Something went wrong! ${error}`}</p> : null}</>;
};

const Empty = ({ data }) => {
  console.log("data---: ", data);
  return <> {data?.length === 0 ? <p>No Packages Available</p> : null}</>;
};
