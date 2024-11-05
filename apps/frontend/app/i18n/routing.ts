import { defineRouting } from 'next-intl/routing'
import { createSharedPathnamesNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
})

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation(routing)

export type TLocale = (typeof routing.locales)[number]
