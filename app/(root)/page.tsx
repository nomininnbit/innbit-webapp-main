import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import DashboardWelcomeCard from '@/components/DashboardWelcomeCard';
import DashboardWelcomeCardTutorial from '@/components/DashboardWelcomeCardTutorial';

const Dashboard = () => {
  const loggedIn = { firstName: 'Max'};
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
          />

        </header>
        <main className="flex space-x-4">
        <DashboardWelcomeCard />
        <DashboardWelcomeCardTutorial />
        </main>
      </div>
    </section>
  )
}

export default Dashboard