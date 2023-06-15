"use client";

import React, { useEffect, useState, ChangeEvent } from "react";


type SearchUsersProps = {
    onSearch: (query: string) => void;
  };
const SearchJobs: React.FC<SearchUsersProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(() => event.target.value);
  };

  useEffect(() => {
      const timer = setTimeout(() => {
        onSearch(searchQuery);
      }, 1000);
      return () => {
        clearTimeout(timer)  // Clear the timeout when the component unmounts or searchQuery changes remember fo best practice
      }
  }, [searchQuery, onSearch]);

  return (
    <div className="border border-amber-400 max-w-sm rounded-xl">
      <input
        type="text"
        className="p-2 rounded-xl outline-none"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search users"
      />
    </div>
  );
};
export default SearchJobs;
