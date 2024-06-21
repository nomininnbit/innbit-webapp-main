import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import UserProfile from '@/components/UserProfile'
import { useState } from 'react'

const Profile = () => {
  return (
    <section className='home'>
    <div className='home-content'>
      <header className='home-header'>
        <HeaderBox 
        />
      </header>
      <main className="flex space-x-4">
        <UserProfile />
      </main>
    </div>
  </section>
  )
}

export default Profile