'use client'

import { addToCart } from '@/app/api/cart'
import { retrieveCart } from '../actions'

export async function addBookVariantToCart(variantId?: string) {
  if (!variantId) {
    return
  }

  const cart = await retrieveCart()

  if (!cart || !cart.id) {
    return
  }

  const cartUpdated = await addToCart(cart.id, variantId)

  if (!cartUpdated) {
    return
  }

  return cartUpdated
}
