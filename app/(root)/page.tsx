import React from 'react'
import HeaderBox from '@/components/HeaderBox'

const Dashboard = () => {
  const loggedIn = { firstName: 'Max'};
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
          />
        </header>
      </div>

    </section>
  )
}

export default Dashboard