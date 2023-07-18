import React, { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { SelectedPackagesList } from "../components/SelectedPackagesList";
import { Modal } from "../components/Modal";

export default function Home() {
  const navigate = useNavigate();

  const [selectedPackages, setSelectedPackages] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const onClick = () => {
    navigate("/add-fav-npm-packages");
  };

  useEffect(() => {
    if (!!localStorage.getItem("packages")) {
      const selectedPackagesFromStorage =
        localStorage.getItem("packages") === "{}"
          ? []
          : JSON.parse(localStorage.getItem("packages"));
      setSelectedPackages(selectedPackagesFromStorage);
    } else {
      setSelectedPackages([]);
    }
  }, [localStorage.getItem("packages")]);

  useEffect(() => {
    if (selectedPackage) {
      setOpenModal(true);
    } else {
      setOpenModal(false);
    }
  }, [selectedPackage]);

  const handleDelete = (value) => {
    setSelectedPackages((packages) => {
      const filteredPackages = packages.filter(
        (packageName) => packageName !== value
      );

      console.log("filteredPackages: ", filteredPackages);
      localStorage.setItem("packages", JSON.stringify(filteredPackages));
      return filteredPackages;
    });
    setSelectedPackage(null);
    setOpenModal(false);
  };

  return (
    <>
      <Modal
        heading="Do you want to delete?"
        isOpen={openModal}
        onClose={() => {
          setSelectedPackage(null);
          setOpenModal(false);
        }}
        modalClassNames="bg-white border-2 mt-14 flex-1"
        modalContent={
          <div className="flex flex-col p-5">
            <div className="">
              <h2 className="text-xl text-[#293845]">
                Are you sure you want to delete?
              </h2>
            </div>
            <div className="mt-10 flex justify-evenly gap-2">
              <Button
                title="Cancel"
                onClick={() => {
                  setSelectedPackage(null);
                  setOpenModal((prevState) => !prevState);
                }}
                className="bg-red-600 px-5 py-2 rounded text-white w-min cursor-pointer"
              />
              <Button
                title="Yes"
                onClick={() => handleDelete(selectedPackage)}
                className="bg-green-600 px-5 py-2 rounded text-white w-min cursor-pointer"
              />
            </div>
          </div>
        }
      />

      <div className="mt-10 py-7 container mx-auto">
        <div className="flex items-center">
          <div className="flex-1">
            <h1 className="text-2xl">Welcome to Favorite NPM Packages</h1>
          </div>
          <div className="flex flex-1 justify-end">
            {Array.isArray(selectedPackages) &&
              selectedPackages?.length > 0 && (
                <Button
                  title="Add Fav"
                  onClick={onClick}
                  className="bg-indigo-500 px-5 py-2 rounded text-white w-min cursor-pointer"
                />
              )}
          </div>
        </div>

        <div className="mt-24">
          {Array.isArray(selectedPackages) && selectedPackages?.length > 0 && (
            <SelectedPackagesList
              packages={selectedPackages}
              itemClassNames={"text-[#293845]"}
              onDelete={(value) => setSelectedPackage(value)}
            />
          )}
          {((Array.isArray(selectedPackages) &&
            selectedPackages?.length === 0) ||
            Object.keys(selectedPackages).length === 0) && (
            <div className="flex flex-col items-center justify-center border-2 border-slate-400 h-72 p-2">
              <h2 className="text-center">
                You don't have any favs yet. Please add.
              </h2>
              <Button
                title="Add Fav"
                onClick={onClick}
                className="bg-indigo-500 px-5 py-2 rounded text-white w-min mt-4 cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
