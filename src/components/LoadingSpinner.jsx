import React from "react";
import { RiLoader2Line } from "react-icons/ri";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="flex items-center space-x-2">
        <RiLoader2Line className="w-10 h-10 animate-spin text-neutral-800" />
        <span className="text-lg text-gray-700">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
