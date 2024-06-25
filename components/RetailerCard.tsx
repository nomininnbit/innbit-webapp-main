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
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      <div className="p-4" style={{ backgroundColor: retailer.bgColor }}>
        <img className="h-16 mx-auto" src={retailer.logo} alt={`${retailer.name} logo`} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{retailer.name}</div>
        <p className="text-gray-700 text-base">{retailer.category}</p>
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <span>{retailer.products} Products</span>
          <span>{retailer.orders} Orders</span>
        </div>
        <div className="mt-4 text-sm">
          <p>Email: <a href={`mailto:${retailer.email}`} className="text-blue-500">{retailer.email}</a></p>
          <p>Phone: {retailer.phone}</p>
          <p>Address: {retailer.address}</p>
          <p>Website: <a href={retailer.website} target="_blank" rel="noopener noreferrer" className="text-blue-500">{retailer.website}</a></p>
        </div>
      </div>
    </div>
  );
};

export default RetailerCard;
