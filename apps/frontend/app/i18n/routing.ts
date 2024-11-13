import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
})

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing)

export type TLocale = (typeof routing.locales)[number]
