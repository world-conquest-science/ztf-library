import { NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from './app/i18n/routing'
import { get_me } from '@ztf-library/api/src/customer'

const publicRoutes = ['cart']

export async function middleware(request: NextRequest) {
  const withLocalization = createMiddleware(routing)

  const customer = await get_me()
  console.log({ customer })
  // if (publicRoutes.some(route => request.nextUrl.pathname.includes(route))) {
  //   // Check auth here
  //   return withLocalization(request)
  // }

  return withLocalization(request)
}

export const config = {
  matcher: ['/', '/(en|fr)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
}
