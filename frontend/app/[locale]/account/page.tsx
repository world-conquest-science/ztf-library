import { Routes } from '@/app/config/routes'
import {
  Bookmark01Icon,
  PackageMovingIcon,
  Payment02Icon,
  RoadLocation01Icon,
  SecurityLockIcon,
} from 'hugeicons-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

type TUISettingIndex =
  | 'wishlist'
  | 'orders'
  | 'login-and-security'
  | 'addresses'
  | 'payment-methods'

type TUISetting = {
  index: TUISettingIndex
  url: string
  Icon: JSX.Element
}

const SettingItem = ({ Icon, index, url }: TUISetting) => {
  const t = useTranslations('AccountSettings')

  return (
    <li className="flex w-full sm:w-1/4">
      <Link
        href={url}
        className="inline-flex w-full flex-col gap-3 rounded-lg p-6 ring-1 ring-gray-200"
      >
        <div className="inline-flex gap-2">
          {Icon}
          <span className="relative top-[1px] text-base font-semibold sm:text-lg">
            {t(`${index}.title`)}
          </span>
        </div>
        <p className="text-sm text-gray-500 sm:text-base">{t(`${index}.description`)}</p>
      </Link>
    </li>
  )
}

const AccountPage = () => {
  const t = useTranslations('AccountSettings')

  const settings: TUISetting[] = [
    {
      index: 'wishlist',
      url: Routes.Wishlist,
      Icon: <Bookmark01Icon />,
    },
    {
      index: 'orders',
      url: Routes.Orders,
      Icon: <PackageMovingIcon />,
    },
    {
      index: 'login-and-security',
      url: Routes.LoginAndSecurity,
      Icon: <SecurityLockIcon />,
    },
    {
      index: 'addresses',
      url: Routes.AccountAddresses,
      Icon: <RoadLocation01Icon />,
    },
    {
      index: 'payment-methods',
      url: Routes.AccountPaymentMethods,
      Icon: <Payment02Icon />,
    },
  ]

  return (
    <div>
      <header className="my-3 flex sm:mb-10 sm:mt-5">
        <h1 className="text-2xl font-bold sm:text-3xl">{t('title')}</h1>
      </header>
      <div className="">
        <ul className="flex w-full flex-col gap-5 sm:flex-row sm:flex-wrap sm:gap-10">
          {settings.map(setting => (
            <SettingItem {...setting} key={setting.index} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AccountPage
