import React, { useState, useCallback, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowSmallLeftIcon } from "@heroicons/react/20/solid";
import { useGetNPMPackages } from "../hooks/useGetNPMPackages";
import { SearchInput } from "../components/SearchInput";
import { List } from "../components/List";
import { TextArea } from "../components/TextArea";
import { Button } from "../components/Button";

export default function AddFavoritePackages() {
  const navigate = useNavigate();
  const [packageName, setPackageName] = useState("");
  const [selectedPackages, setSelectedPackages] = useState(new Set());

  useEffect(() => {
    if (!!localStorage.getItem("packages")) {
      const selectedPackagesFromStorage =
        localStorage.getItem("packages") === "{}"
          ? []
          : JSON.parse(localStorage.getItem("packages"));
      setSelectedPackages(selectedPackagesFromStorage);
    }
  }, [localStorage.getItem("packages")]);

  const onChange = useCallback((value) => {
    setPackageName(value);
  }, []);

  const { isLoading, data, error } = useGetNPMPackages(packageName);

  const handleItemSelect = (value) => {
    setSelectedPackages((prevValue) => [...prevValue, value]);
  };

  const handleSubmit = () => {
    localStorage.setItem("packages", JSON.stringify(selectedPackages));
    navigate("/");
  };

  return (
    <div className="container mx-auto mt-10">
      <button
        type="button"
        onClick={() => navigate("/")}
        className="h-8 w-8 text-black cursor-pointer"
      >
        <ArrowSmallLeftIcon />
      </button>

      <form onSubmit={() => handleSubmit()}>
        {/* Search Input */}
        <SearchInput
          value={packageName}
          onChange={onChange}
          required
          label="Search For NPM Packages"
          placeholder="reactjs"
          labelClassNames={"text-xl text-[#293845] font-bold"}
          classNames={
            "border-2 border-slate-400 w-full outline-none p-2 rounded"
          }
        />

        {/* List */}
        <div className="pt-5">
          <List
            heading={"Results"}
            headingClassNames={"font-bold text-[#293845] my-4"}
            isLoading={isLoading}
            error={error}
            data={data?.pages}
            onItemSelect={(value) => handleItemSelect(value)}
          />
        </div>

        {/* Favorite Input Form */}
        <div className="mt-10">
          <TextArea
            label="Why is this your fav?"
            labelClassNames={"text-[#293845] font-bold"}
            rows={4}
            classNames={
              "border-2 border-slate-400 w-full rounded outline-none p-2"
            }
            required
          />
          <div className="ml-auto flex justify-end mt-5">
            <Button
              title={"Submit"}
              classNames="bg-indigo-500 py-2 px-5 rounded text-white cursor-pointer"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
