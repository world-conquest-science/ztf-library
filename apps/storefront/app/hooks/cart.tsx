'use client'

import { StoreCart } from '@ztf-library/api/src/clients'
import React, { createContext, useState } from 'react'

const useCartState = () => useState<StoreCart>()

export const CartContext = createContext<ReturnType<
  typeof useCartState
> | null>(null)

export const useCart = () => {
  const cart = React.useContext(CartContext)

  if (!cart) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return cart
}

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useCartState()

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
