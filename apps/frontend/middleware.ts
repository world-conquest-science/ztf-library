import { NextRequest, NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from './app/i18n/routing'
import { cookies } from 'next/headers'
import { COOKIE_NAME } from './app/config/auth'
import { isPublicRoute } from './app/helpers/routes'
import { Routes } from './app/config/routes'

export async function middleware(request: NextRequest) {
  const { nextUrl } = request
  const withLocalization = createMiddleware(routing)

  const token = cookies().get(COOKIE_NAME)?.value
  const isAuthenticated = !!token
  const isPrivateRoute = !isPublicRoute(nextUrl.pathname)

  if (isPrivateRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL(Routes.SignIn, nextUrl))
  }

  return withLocalization(request)
}

export const config = {
  matcher: ['/', '/(en|fr)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
}
