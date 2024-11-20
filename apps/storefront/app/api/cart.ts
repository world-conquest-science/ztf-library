import api from '@ztf-library/api'

export async function createCart() {
  const cart = await api
    .with(process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY)
    .cart.create()

  if (!cart) {
    return
  }

  return cart
}

export async function getCart(id: string) {
  const cart = await api
    .with(process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY)
    .cart.get(id)

  if (!cart) {
    return
  }

  return cart
}
