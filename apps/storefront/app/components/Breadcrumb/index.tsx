'use client'

import { usePathname } from '@/app/i18n/routing'
import { ArrowRight01Icon } from 'hugeicons-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

type TUIBreadcrumb = {
  isLast: boolean
  url: string
  title: string
}

const Separator = ({ isLast }: Pick<TUIBreadcrumb, 'isLast'>) => {
  if (isLast) return <></>

  return (
    <li>
      <ArrowRight01Icon size={12} className="relative" />
    </li>
  )
}

const BreadcrumbItem = ({ isLast, url, title }: TUIBreadcrumb) => {
  return (
    <>
      <li className={`text-xs sm:text-sm ${isLast ? 'text-gray-400' : 'text-gray-700'}`}>
        {isLast ? <span>{title}</span> : <Link href={`/${url}`}>{title}</Link>}
      </li>
      <Separator isLast={isLast} />
    </>
  )
}

const Breadcrumb = () => {
  const t = useTranslations('Routes.Breadcrumb')

  const paths = usePathname()
    .split('/')
    .filter(path => path)
    .map((pathname, index, allPaths) => ({
      isLast: index === allPaths.length - 1,
      url: pathname,
      title: t(pathname as never),
    }))

  return (
    <ul className="flex items-center gap-1">
      {paths.map(path => (
        <BreadcrumbItem {...path} key={path.url} />
      ))}
    </ul>
  )
}

export { Breadcrumb }
