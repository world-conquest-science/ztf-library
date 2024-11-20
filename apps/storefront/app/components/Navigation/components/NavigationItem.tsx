import React from 'react'
import Link from 'next/link'

export type TNavigationItem = {
  href: string
  label: string
  current?: boolean
  Icon?: JSX.Element
}

export const NavigationItem = ({
  current,
  href,
  label,
  Icon,
}: TNavigationItem) => {
  return (
    <li>
      <Link
        href={href}
        className={`inline-flex items-center gap-2 text-base ${current ? 'font-semibold' : 'font-normal'}`}
      >
        {Icon}
        <span className="relative top-[2px]">{label}</span>
      </Link>
    </li>
  )
}
