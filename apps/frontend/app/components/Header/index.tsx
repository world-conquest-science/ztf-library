import React from 'react'
import { Logo } from '@/app/components/Logo'
import { Searchbar } from '@/app/components/Searchbar'
import { UserNavigation } from '@/app/components/Navigation/UserNavigation'
import { AppNavigation } from '../Navigation/AppNavigation'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="flex flex-col bg-background-base">
      <div className="container mx-auto">
        <div className="flex w-full items-center justify-between py-2">
          <div className="flex w-full flex-col px-4 sm:w-auto sm:flex-row sm:items-center sm:gap-10 sm:px-0">
            <Link href="/" className="inline-block w-fit">
              <span className="hidden sm:inline-block">
                <Logo theme="colored" variant="full" width={220} />
              </span>
              <span className="inline-block sm:hidden">
                <Logo theme="colored" variant="full" width={150} />
              </span>
            </Link>
            <Searchbar />
          </div>
          <UserNavigation />
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="container mx-auto">
          <div className="sm:px-2 sm:py-4">
            <AppNavigation />
          </div>
        </div>
      </div>
    </header>
  )
}
