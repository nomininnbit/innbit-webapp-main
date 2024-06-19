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
        <nav className='flex flex-col gap-2'>
            <Link href='/' className='mb-12 cursor-pointer flex items-center gap-4'>
            <Image
                src='/icons/innbitLogo.svg'
                width={30}
                height={30}
                alt='Innbit Logo'
                className='size-full max-xl:size-14 p-3'
            />            
            </Link>

            {sidebarLinks.map((item) => {
                const isActive = pathname === item.route || pathname.startsWith('${item.route}/')
                return (
                    <Link href={item.route} key={item.label} className={cn('sidebar-link', { 'bg-innbitRed':isActive })}>
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
                        <p className={cn('sidebar-label', {'!text-white': isActive})}>
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