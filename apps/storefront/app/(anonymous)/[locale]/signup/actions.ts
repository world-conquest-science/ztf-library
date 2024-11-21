'use server'

import { COOKIE_NAME } from '@/app/config/auth'
import { Routes } from '@/app/config/routes'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { signinUsingEmail } from '@/app/api/auth'

export async function signup(
  email: string,
  password: string,
  fullName: string,
) {
  const token = await signinUsingEmail(email, password)

  if (!token) {
    return
  }

  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours

  cookies().set(COOKIE_NAME, token, { expires, httpOnly: true })

  redirect(Routes.Home)
}
