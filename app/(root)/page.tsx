import React from 'react';
import HeaderBox from '@/components/HeaderBox';
import DashboardWelcomeCard from '@/components/DashboardWelcomeCard';
import DashboardWelcomeCardTutorial from '@/components/DashboardWelcomeCardTutorial';
import Card from '@/components/Card';

const Dashboard = () => {
  const loggedIn = { firstName: 'Max' };

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox />
        </header>
        <main className="flex space-x-4">
          <DashboardWelcomeCard />
          <DashboardWelcomeCardTutorial />
        </main>

        <div className="w-full">
          <Card
            title="My Retailers"
            subtitle="Total Retailers"
            count={0}
            total={0}
            name="Retailer Name"
            info="Number of Products"
            buttonLabel="Add new Retailer"
          />
        </div>
        <div className="w-full">
          <Card
            title="My Products"
            subtitle="Summary of My Products"
            count={0}
            total={0}
            name="Your Product Name"
            info="retailerName\n0 available of 0"
            buttonLabel="Add new Product"
          />
        </div>
        <div className="w-full">
          <Card
            title="My Boxes"
            subtitle="Total Boxes"
            count={0}
            total={0}
            name="Your Box Name"
            info="no information available"
            buttonLabel="Setup new box"
          />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;