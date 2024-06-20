import React from 'react';

const DashboardWelcomeCardTutorial = () => {
  return (
    <section className="p-6 bg-white border border-gray-200 rounded-lg">
      <div>
        <h2 className="text-4xl font-bold text-red-600 mb-4">How to Setup new Box</h2>
        <p className="text-gray-700 mb-6">
        "Ready to set up your new innbit Smart Box? It's easy! Go to the 'Boxes' page, click 'Add Box,' and follow the simple instructions. 
        Need help? Check out the 'Help Center'!"
        </p>
        <button
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
          title="Here we can add texts, example: Click to view more information" // Mouse hover information
        >
          Go to Tutorial
        </button>
      </div>
    </section>
  );
};

export default DashboardWelcomeCardTutorial;