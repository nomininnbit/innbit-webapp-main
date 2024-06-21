// components/Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  subtitle: string;
  count: number;
  total: number;
  name: string;
  info: string;
  buttonLabel: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, count, total, name, info, buttonLabel }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 my-4 mx-auto flex justify-between w-auto gap-8">
      <div className="mb-4 flex justify-between w-full">
        <div>
          <h2 className="m-0 text-2xl">{title}</h2>
          <p className="m-1 text-gray-600">{subtitle}</p>
          <p className="text-2xl font-bold">
          {count} <span className="text-gray-400">of {total}</span>
        </p>
        </div>
        
      </div>
      <div className="flex justify-between items-center bg-red-100 rounded-lg p-4 w-full">
        <div className="flex items-center">
          <div className="w-20 h-20 bg-white rounded-full mr-4"></div>
          <div>
            <p className='font-bold'>{name}</p>
            <p>{info}</p>
          </div>
        </div>
        <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default Card;
