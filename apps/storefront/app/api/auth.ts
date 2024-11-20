import api from '@ztf-library/api'

export async function signinUsingEmail(email: string, password: string) {
  const token = await api
    .with(process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY)
    .authentication.signin({ email, password })

  if (!token) {
    return
  }

  return token
}
