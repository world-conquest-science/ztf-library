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

export async function addToCart(cartId: string, variantId: string) {
  const cart = await api
    .with(process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY)
    .cart.addToCart(cartId, variantId)

  if (!cart) {
    return
  }

  return cart
}

export async function updateInCart(
  cartId: string,
  cartLineId: string,
  quantity: number,
) {
  const cart = await api
    .with(process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY)
    .cart.updateQuantityInCart(cartId, cartLineId, quantity)

  if (!cart) {
    return
  }

  return cart
}

export async function removeFromCart(cartId: string, cartLineId: string) {
  const cart = await api
    .with(process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY)
    .cart.removeFromCart(cartId, cartLineId)

  if (!cart) {
    return
  }

  return cart
}
