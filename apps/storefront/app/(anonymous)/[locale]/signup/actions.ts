'use server'

import { COOKIE_NAME } from '@/app/config/auth'
import { Routes } from '@/app/config/routes'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { signupUsingEmail } from '@/app/api/auth'

export async function signup(
  email: string,
  password: string,
  fullName: string,
) {
  const { token, error } = await signupUsingEmail(email, password, fullName)

  if (!token) {
    return { error }
  }

  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours

  cookies().set(COOKIE_NAME, token, { expires, httpOnly: true })

  redirect(Routes.Home)
}
