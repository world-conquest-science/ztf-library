import React from 'react'
import { Routes } from '@/app/config/routes'
import { NavigationItem } from '@/app/components/Navigation/components/NavigationItem'
import { UserDropdown } from '../UserDropdown'
import {
  PackageMovingIcon,
  ShoppingBasket01Icon,
  Bookmark01Icon,
} from 'hugeicons-react'
import { useTranslations } from 'next-intl'
import { MobileNavigation } from './MobileNavigation'

export const UserNavigation = () => {
  const t = useTranslations('Header.UserNavigation')

  const routes = [
    {
      href: Routes.Orders,
      label: t('orders'),
      Icon: <PackageMovingIcon size={18} />,
    },
    {
      href: Routes.Wishlist,
      label: t('wishlist'),
      Icon: <Bookmark01Icon size={18} />,
    },
    {
      href: Routes.Cart,
      label: t('cart'),
      Icon: <ShoppingBasket01Icon size={18} />,
    },
  ]

  return (
    <>
      <nav className="hidden sm:block">
        <ol className="flex flex-row gap-9">
          {routes.map(({ href, label, Icon }) => (
            <NavigationItem key={href} href={href} label={label} Icon={Icon} />
          ))}
          <UserDropdown />
        </ol>
      </nav>

      <MobileNavigation />
    </>
  )
}
