import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Routes } from '@/app/config/routes'
import { ArrowDown01Icon, UserIcon } from 'hugeicons-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const UserDropdownItem = ({ href, label }: { href: string; label: string }) => {
  return (
    <MenuItem>
      <Link
        href={href}
        className="block px-4 py-2 text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
      >
        {label}
      </Link>
    </MenuItem>
  )
}

const UserDropdown = () => {
  const t = useTranslations('Header.UserNavigation')

  const userName = 'Jean-Jacques'
  const routes = [
    {
      href: Routes.AccountSettings,
      label: t('account-settings'),
    },
    {
      href: Routes.AccountAddresses,
      label: t('addresses'),
    },
    {
      href: Routes.AccountPaymentMethods,
      label: t('payment-methods'),
    },
    {
      href: Routes.SignOut,
      label: t('sign-out'),
    },
  ]

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full items-center justify-center gap-x-1.5">
          <UserIcon size={18} />
          {userName}
          <ArrowDown01Icon aria-hidden="true" className="mt-1 h-5 w-5" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-4 w-56 origin-top-right overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-2">
          {routes.map(({ href, label }) => (
            <UserDropdownItem key={href} href={href} label={label} />
          ))}
        </div>
      </MenuItems>
    </Menu>
  )
}

export { UserDropdown }
