'use server'

import { COOKIE_NAME } from '@/app/config/auth'
import { Routes } from '@/app/config/routes'
import api from '@ztf-library/api'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function signin(email: string, password: string) {
  const token = await api
    .with(process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY)
    .authentication.signin({ email, password })

  if (!token) {
    return
  }

  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours

  cookies().set(COOKIE_NAME, token, { expires, httpOnly: true })

  redirect(Routes.Home)
}
