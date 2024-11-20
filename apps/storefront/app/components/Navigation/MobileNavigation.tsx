'use client'

import { Routes } from '@/app/config/routes'
import {
  AngelIcon,
  Cancel01Icon,
  ChampionIcon,
  LibraryIcon,
  Menu01Icon,
  PackageMovingIcon,
  ShoppingBasket01Icon,
  Bookmark01Icon,
  Tag01Icon,
  UserIcon,
} from 'hugeicons-react'
import { useTranslations } from 'next-intl'
import React from 'react'
import { MobileNavigationItem } from './components/MobileNavigationItem'
import { Menu, MenuButton, MenuItems } from '@headlessui/react'

const MobileNavigation = () => {
  const t = useTranslations('Header')

  const routes = [
    {
      href: Routes.Orders,
      label: t('UserNavigation.orders'),
      Icon: <PackageMovingIcon size={18} />,
    },
    {
      href: Routes.Wishlist,
      label: t('UserNavigation.wishlist'),
      Icon: <Bookmark01Icon size={18} />,
    },
    {
      href: Routes.Cart,
      label: t('UserNavigation.cart'),
      Icon: <ShoppingBasket01Icon size={18} />,
    },
    {
      href: Routes.AccountSettings,
      label: t('UserNavigation.account-settings'),
      Icon: <UserIcon size={18} />,
    },
    {
      href: Routes.BestSellers,
      label: t('AppNavigation.best-sellers'),
      Icon: <ChampionIcon size={18} />,
    },
    {
      href: Routes.TheChristianWay,
      label: t('AppNavigation.the-christian-way'),
      Icon: <AngelIcon size={18} />,
    },
    {
      href: Routes.AllCategories,
      label: t('AppNavigation.categories'),
      Icon: <LibraryIcon size={18} />,
    },
    {
      href: Routes.SpecialOffers,
      label: t('AppNavigation.special-offers'),
      Icon: <Tag01Icon size={18} />,
    },
  ]

  return (
    <Menu as="div" className="absolute right-4 top-7 block sm:hidden">
      <MenuButton className="p-2">
        {({ open }) =>
          open ? <Cancel01Icon size={30} /> : <Menu01Icon size={30} />
        }
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 top-[50px] z-10 min-w-[220px] origin-top-right overflow-hidden rounded-none bg-white shadow-2xl shadow-slate-200 ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <ol className="flex flex-col py-1">
          {routes.map(route => (
            <MobileNavigationItem key={route.href} {...route} />
          ))}
        </ol>
      </MenuItems>
    </Menu>
  )
}

export { MobileNavigation }
