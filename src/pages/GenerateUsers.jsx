// App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";
import Filters from "../components/Filters";
import ExportButton from "../components/ExportButton";
import LoadingSpinner from "../components/LoadingSpinner";

const GenerateUsers = () => {
  const [users, setUsers] = useState([]);
  const [filters, setFilters] = useState({
    gender: "",
    nationality: "",
    ageRange: [18, 60],
  });
  const [nationalities, setNationalities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const { gender, nationality } = filters;
      const url = `https://randomuser.me/api/?results=10&gender=${gender}&nat=${nationality}`;
      const response = await axios.get(url);
      const fetchedUsers = response.data.results;

      setUsers(fetchedUsers);

      // Extract unique nationalities
      const uniqueNationalities = [
        ...new Set(fetchedUsers.map((user) => user.nat)),
      ].sort(); // Sort alphabetically for better UX
      setNationalities(uniqueNationalities);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-4">
        <div className="flex items-center justify-between max-md:flex-col max-md:items-start">
          <Filters
            filters={filters}
            setFilters={setFilters}
            nationalities={nationalities}
          />
          <ExportButton users={users} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {users.map((user, index) => (
            <UserCard key={index} user={user} />
          ))}
        </div>
        {isLoading && <LoadingSpinner />}
      </div>
    </div>
  );
};

export default GenerateUsers;
