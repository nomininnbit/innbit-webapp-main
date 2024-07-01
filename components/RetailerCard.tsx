// components/RetailerCard.tsx
import React from 'react';

interface Retailer {
  name: string;
  category: string;
  products: number;
  orders: number;
  email: string;
  phone: string;
  address: string;
  website: string;
  logo: string;
  bgColor: string;
}

interface RetailerCardProps {
  retailer: Retailer;
}

const RetailerCard: React.FC<RetailerCardProps> = ({ retailer }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-md m-4 bg-white text-center">
      <div className="p-4" style={{ backgroundColor: retailer.bgColor }}>
        <img
          className="h-25 mx-auto rounded overflow-hidden object-fill object-center"
          src={retailer.logo}
          alt={`${retailer.name} logo`}
        />
      </div>
      <div className="p-3 rounded overflow-hidden border border-gray-100 m-4">
        <div className="font-bold text-xl mb-1">{retailer.name}</div>
        <p className="text-gray-700 text-base">{retailer.category}</p>
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>
            <span className="font-bold text-innbitRed text-lg">
              {retailer.products}
            </span>{" "}
            Products
          </span>
          <span>
            <span className="font-bold text-innbitRed text-lg">
              {retailer.orders}
            </span>{" "}
            Orders
          </span>
        </div>
      </div>
      <div className="p-2 text-sm mb-3">
        <div>
          <p>
            Email:{" "}
            <a href={`mailto:${retailer.email}`} className="text-blue-500">
              {retailer.email}
            </a>
          </p>
          <p>Phone: {retailer.phone}</p>
          <p>Address: {retailer.address}</p>
          <p>
            Website:{" "}
            <a
              href={retailer.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              {retailer.website}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RetailerCard;
