"use client";

import React from "react";

const SearchBar = () => {
  return (
    <form className="flex ic justify-between gap-4 p-2 rounded-md flex-1 border border-gray-200">
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 bg-transparent outline-none"
      />
      <button type="submit" className="cursor-pointer hover:bg-gray-100">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
