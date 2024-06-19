'use client'

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const Sidebar = ({ user }: SidebarProps) => {
  const pathname = usePathname();
  return (
    <section className='sidebar'>
      <nav className='flex flex-col gap-1'>
        <Link href='/' className='mb-8 cursor-pointer flex items-center gap-4'>
          <Image
            src='/icons/innbitLogo.svg'
            width={30}
            height={30}
            alt='Innbit Logo'
            className='size-full max-xl:size-14 p-3'
          />
        </Link>

        {/* User Profile Section */}
        <div className='flex items-center cursor-pointer gap-4 p-3 bg-gray-100 rounded-md mb-4'>
        <Link href='/profile'>
          <Image
            src={'/icons/defaultProfile.png'}
            width={40}
            height={40}
            alt='User Profile'
            className='rounded-full'
          />
        </Link>
        <Link href='/profile'>
          <div>
            <p className='font-semibold text-gray-600'>Erika Musterfrau</p>
            <p className='text-sm text-gray-600'>user@test.com</p>
          </div>
        </Link>
        </div>

        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
          return (
            <Link href={item.route} key={item.label} className={cn('sidebar-link', { 'bg-innbitRed': isActive })}>
              <div className='relative size-6'>
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    'brightness-[3] invert-0': isActive
                  })}
                />
              </div>
              <p className={cn('sidebar-label', { '!text-white': isActive })}>
                {item.label}
              </p>
            </Link>
          )
        })}
      </nav>
    </section>
  )
}

export default Sidebar