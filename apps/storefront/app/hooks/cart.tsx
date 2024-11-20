'use client'

import { TCart } from '@ztf-library/types'
import React, { createContext, useState } from 'react'

const initialCartState: TCart = {
  items: [],
}

const useCartState = () => useState<TCart>(initialCartState)

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
