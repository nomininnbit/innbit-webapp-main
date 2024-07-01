"use client";

import React from "react";
import Image from "next/image";

const SearchBar = () => {
  return (
    <form className="flex ic justify-between gap-4 p-2 rounded-md flex-1 border border-gray-200">
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 bg-transparent outline-none text-xs"
      />
      <button type="submit" className="cursor-pointer hover:shadow-md">
        <Image
          src={"/icons/search.svg"}
          alt={"Search Icon"}
          width={20}
          height={20}
        />
      </button>
    </form>
  );
};

export default SearchBar;
