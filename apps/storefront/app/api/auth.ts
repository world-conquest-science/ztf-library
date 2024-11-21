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

export async function signupUsingEmail(
  email: string,
  password: string,
  name: string,
) {
  const token = await api
    .with(process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY)
    .authentication.signup({ email, password, first_name: name })

  if (!token) {
    return
  }

  return token
}
