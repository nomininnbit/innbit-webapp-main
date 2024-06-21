import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import PageSettings from '@/components/PageSettings'

const Settings = () => {
  return (
    <section className='home'>
    <div className='home-content'>
      <header className='home-header'>
        <HeaderBox 
        />
      </header>
        <main className="flex space-x-4">
          <PageSettings
          />
        </main>
    </div>
  </section>
  )
}

export default Settings