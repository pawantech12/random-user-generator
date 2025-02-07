// ExportButton.js
import React from "react";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import { Button } from "./ui/button";

const ExportButton = ({ users }) => {
  const handleExportJSON = () => {
    const json = JSON.stringify(users);
    const blob = new Blob([json], { type: "application/json" });
    saveAs(blob, "users.json");
  };

  const handleExportCSV = () => {
    const csvData = users.map((user) => ({
      Name: `${user.name.first} ${user.name.last}`,
      Email: user.email,
      Age: user.dob.age,
      Nationality: user.nat,
    }));
    const worksheet = XLSX.utils.json_to_sheet(csvData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
    const csv = XLSX.write(workbook, { bookType: "csv", type: "array" });
    saveAs(new Blob([csv]), "users.csv");
  };

  return (
    <div className="flex space-x-4 mb-4 max-md:flex max-md:items-center max-md:justify-between max-md:w-full">
      <Button
        onClick={handleExportJSON}
        className="text-base py-5 bg-white text-neutral-800 border border-neutral-700 hover:text-white"
      >
        Export to JSON
      </Button>
      <Button
        onClick={handleExportCSV}
        className="bg-neutral-700 hover:bg-neutral-900 py-5 text-base"
      >
        Export to CSV
      </Button>
    </div>
  );
};

export default ExportButton;
