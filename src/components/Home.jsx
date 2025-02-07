// Home.js
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200 max-sm:px-2">
      <h1 className="text-4xl font-bold text-neutral-700 mb-6 text-center">
        Welcome to Random User Generator
      </h1>
      <Button className="text-lg py-6 px-8 bg-neutral-700 hover:bg-neutral-900">
        <Link to={`/generate-users`}>Generate Users</Link>
      </Button>
    </div>
  );
};

export default Home;
