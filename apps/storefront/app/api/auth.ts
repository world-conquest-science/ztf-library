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
  try {
    const token = await api
      .with(process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY)
      .authentication.signup({ email, password, first_name: name })

    if (!token) {
      return { token: null, customer: null }
    }

    const customer = await api
      .with(process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY)
      .customer.create({
        first_name: name,
        last_name: '',
        email,
      })

    if (!customer) {
      return { token: null, customer: null }
    }

    return { token, customer }
  } catch (error) {
    return {
      token: null,
      error: {
        message: error?.message as string,
      },
    }
  }
}
