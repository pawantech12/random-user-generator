import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const genderOptions = [
  { value: "any", label: "Any Gender" },
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const ageOptions = Array.from({ length: 83 }, (_, i) => ({
  value: i + 18,
  label: `${i + 18}`,
}));

const Filters = ({ filters, setFilters, nationalities }) => {
  const nationalityOptions = nationalities.map((nat) => ({
    value: nat.toLowerCase(),
    label: nat.toUpperCase(),
  }));

  const handleGenderChange = (value) => {
    setFilters({ ...filters, gender: value });
  };

  const handleNationalityChange = (value) => {
    setFilters({ ...filters, nationality: value });
  };

  const handleMinAgeChange = (value) => {
    setFilters({
      ...filters,
      ageRange: [value, filters.ageRange[1]],
    });
  };

  const handleMaxAgeChange = (value) => {
    setFilters({
      ...filters,
      ageRange: [filters.ageRange[0], value],
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-4 w-[75%] max-md:w-full ">
      {/* Gender Select */}
      <Select onValueChange={handleGenderChange} value={filters.gender}>
        <SelectTrigger className="w-full md:w-1/5 bg-white text-base py-5 ">
          <SelectValue placeholder="Select Gender" />
        </SelectTrigger>
        <SelectContent>
          {genderOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Nationality Select */}
      <Select
        onValueChange={handleNationalityChange}
        value={filters.nationality}
      >
        <SelectTrigger className="w-full md:w-1/5 bg-white text-base py-5">
          <SelectValue placeholder="Select Nationality" />
        </SelectTrigger>
        <SelectContent>
          {nationalityOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Age Range Selects */}
      <div className="flex space-x-4 w-full md:w-2/5">
        {/* Min Age Select */}
        <Select onValueChange={handleMinAgeChange} value={filters.ageRange[0]}>
          <SelectTrigger className="w-1/2 bg-white text-base py-5">
            <SelectValue placeholder="Min Age" />
          </SelectTrigger>
          <SelectContent>
            {ageOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Max Age Select */}
        <Select onValueChange={handleMaxAgeChange} value={filters.ageRange[1]}>
          <SelectTrigger className="w-1/2 bg-white text-base py-5">
            <SelectValue placeholder="Max Age" />
          </SelectTrigger>
          <SelectContent>
            {ageOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Filters;
