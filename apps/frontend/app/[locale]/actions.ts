import { cookies } from 'next/headers'

import { COOKIE_NAME } from '@/app/config/cart'
import { createCart, getCart } from '../api/cart'

export async function retrieveCart() {
  const cartId = cookies().get(COOKIE_NAME)

  if (cartId) {
    return await getCart(cartId.value)
  }

  const cart = await createCart()
  const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days

  if (!cart) return

  cookies().set(COOKIE_NAME, cart.id, { expires, httpOnly: true })

  return cart
}
