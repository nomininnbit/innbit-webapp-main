import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import FaqPage from '@/components/FaqPage'
import SupportTicketsPage from '@/components/SupportTicketsPage'

const helpCenter = () => {
  return (
    <section className='home'>
    <div className='home-content'>
      <header className='home-header'>
        <HeaderBox 
        />
      </header>
        <main className="flex space-x-4">
          <FaqPage
          />
          <SupportTicketsPage />

      </main>
    </div>
  </section>
  )
}

export default helpCenter