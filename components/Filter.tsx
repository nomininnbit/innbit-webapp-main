"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
const Filter = () => {
  return (
    <div className="flex ic justify-between">
      <div className="flex gap-4 flex-wrap">
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
        <select
          name="Sort By"
          id=""
          className="p-2 px-2 rounded-md border border-gray-200 text-xs font-medium"
        >
          <option value="">Sort By</option>
          <option value="">Price (low to high)</option>
          <option value="">Price (high to low)</option>
          <option value="">Date (new to old)</option>
          <option value="">Rating (high to low)</option>
        </select>
        <select
          name="Retailer"
          id=""
          className="p-2 px-2 rounded-md border border-gray-200 text-xs font-medium"
        >
          <option value="">Retailer</option>
          <option value="">Retailer 1</option>
          <option value="">Retailer 2</option>
          <option value="">Retailer 3</option>
          <option value="">Retailer 4</option>
          <option value="">...</option>
        </select>{" "}
        <select
          name="Price"
          id=""
          className="p-2 px-2 rounded-md border border-gray-200 text-xs font-medium"
        >
          <option value="">Price</option>
          <option value="">Price 1</option>
          <option value="">Price 2</option>
          <option value="">Price 3</option>
          <option value="">Price 4</option>
          <option value="">...</option>
        </select>{" "}
        <select
          name="Type"
          id=""
          className="p-2 px-2 rounded-md border border-gray-200 text-xs font-medium"
        >
          <option value="">Type</option>
          <option value="">Type 1</option>
          <option value="">Type 2</option>
          <option value="">Type 3</option>
          <option value="">Type 4</option>
          <option value="">...</option>
        </select>
        <select
          name="Inventory"
          id=""
          className="p-2 px-2 rounded-md border border-gray-200 text-xs font-medium"
        >
          <option value="">Inventory</option>
          <option value="">In stock</option>
          <option value="">Not in stock</option>
        </select>
        <select
          name="SKU"
          id=""
          className="p-2 px-2 rounded-md border border-gray-200 text-xs font-medium"
        >
          <option value="">SKU</option>
          <option value="">SKU search bar</option>
        </select>
      </div>
      <div>
        <button className="bg-innbitRed text-white rounded-lg p-2">
          Add new Product
        </button>
      </div>
    </div>
  );
};

export default Filter;
