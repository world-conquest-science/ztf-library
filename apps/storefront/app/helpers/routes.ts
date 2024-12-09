import { ProtectedSubRoutes, PublicRoutes, Routes } from '../config/routes'
import { localesPipeSeparated } from '../i18n/routing'

export function isPublicRoute(pathname: string) {
  const isInPublicRoutes = !!PublicRoutes.find(route =>
    new RegExp(String.raw`(${localesPipeSeparated})?${route}`, 'g').test(
      pathname,
    ),
  )?.length
  const isHomeRoute = pathname === Routes.Home
  const isNotInProtectedSubRoutes = !ProtectedSubRoutes.find(route =>
    pathname.includes(route),
  )

  return (isHomeRoute || isInPublicRoutes) && isNotInProtectedSubRoutes
}

export function generateBookUrl(slug: string) {
  return `/${slug}`
}

export function generateCategoryUrl(slug: string) {
  return `/category/${slug}`
}
