import React from 'react'
import { Routes } from '@/app/config/routes'
import { NavigationItem } from '@/app/components/Navigation/components/NavigationItem'
import { useTranslations } from 'next-intl'

export const AppNavigation = () => {
  const t = useTranslations('Header.AppNavigation')

  const routes = [
    {
      href: Routes.BestSellers,
      label: t('best-sellers'),
    },
    {
      href: Routes.TheChristianWay,
      label: t('the-christian-way'),
    },
    {
      href: Routes.GodLovesYou,
      label: t('god-loves-you'),
    },
    {
      href: Routes.GodSexAndYou,
      label: t('god-sex-and-you'),
    },
    {
      href: Routes.ToOvercame,
      label: t('to-overcame'),
    },
    {
      href: Routes.FromHisLips,
      label: t('from-his-lips'),
    },
    {
      href: Routes.AllCategories,
      label: t('categories'),
    },
    {
      href: Routes.SpecialOffers,
      label: t('special-offers'),
    },
  ]

  return (
    <nav className="hidden sm:flex">
      <ol className="flex gap-7">
        {routes.map(({ href, label }) => (
          <NavigationItem key={href} href={href} label={label} />
        ))}
      </ol>
    </nav>
  )
}
