import Link from 'next/link'
import React from 'react'
import { TNavigationItem } from '@/app/components/Navigation/components/NavigationItem'

const MobileNavigationItem = ({ href, label, Icon }: TNavigationItem) => {
  return (
    <li>
      <Link
        href={href}
        className="inline-flex w-full items-center gap-2 px-5 py-3 text-base font-normal"
      >
        {Icon}
        <span>{label}</span>
      </Link>
    </li>
  )
}

export { MobileNavigationItem }
