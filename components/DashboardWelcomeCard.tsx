import React from 'react';

const DashboardWelcomeCard = () => {
  return (
    <section className="p-6 bg-white border border-gray-200 rounded-lg">
      <div>
        <h2 className="text-4xl font-bold text-red-600 mb-4">Welcome to innbit!</h2>
        <p className="text-gray-700 mb-6">
          Flexible IoT Product Tracking Platform for All Business Sectors
          Our innbitory platform creates added value for your daily product management. We combine customized printed sensor technology with an intuitive management system.
        </p>
        <button
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
          title="Here we can add texts, example: Click to view more information" // Mouse hover information
        >
          View More
        </button>
      </div>
    </section>
  );
};

export default DashboardWelcomeCard;