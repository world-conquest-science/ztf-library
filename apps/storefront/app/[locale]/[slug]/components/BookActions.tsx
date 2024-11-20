'use client'

import { formatPrice } from '@/app/helpers/price'
import { TBook } from '@ztf-library/types'
import {
  BookmarkAdd01Icon,
  Cancel01Icon,
  CheckmarkBadge01Icon,
  ShoppingBasketAdd01Icon,
} from 'hugeicons-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { addBookVariantToCart } from '../actions'
import { useCart } from '@/app/hooks/cart'

interface IBookActions {
  book: TBook
}

export const BookActions = ({ book }: IBookActions) => {
  const gTrans = useTranslations('Global')

  const [selectedFormat, setSelectedFormat] = useState(book.formats.at(0))
  const [isAdding, setIsAdding] = useState(false)
  const [cart, setCart] = useCart()

  const onAddToCartClick = async () => {
    setIsAdding(true)
    const cart = await addBookVariantToCart(selectedFormat?.variant_id)

    if (!cart) {
      return
    }

    console.log({ cart })
    setCart(cart)
    setIsAdding(false)
  }

  const isInCart = cart.items.find(
    product => product.item.variant_id === selectedFormat?.variant_id,
  )

  return (
    <>
      {/* Formats and availability */}
      <div className="flex flex-col gap-2">
        {/* Formats */}
        <span className="text-sm font-bold uppercase">{gTrans('format')}</span>
        <ul className="gap-4">
          {book.formats.map(format => (
            <li
              key={format.variant_id}
              className="inline-flex rounded-sm bg-background-100 ring-2 ring-background-300"
            >
              <button
                className="inline-flex flex-col px-4 py-2"
                onClick={() => setSelectedFormat(format)}
              >
                <span className="text-sm font-light">{format.label}</span>
                <div className="inline-flex items-center gap-2">
                  {/* <span className="text-sm line-through">{format.prices[0]!.amount}</span> */}
                  <span className="text-lg font-black">
                    {formatPrice(format.prices[0]!.amount)}
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>

        {/* Availability */}
        <div className="inline-flex w-fit items-center gap-1">
          {selectedFormat?.is_available ? (
            <>
              <CheckmarkBadge01Icon size={20} color="#16a34a" strokeWidth={3} />
              <span className="relative top-[1px] text-xs font-black uppercase text-green-600 sm:top-[2px] sm:text-base">
                {gTrans('available')}
              </span>
            </>
          ) : (
            <>
              <Cancel01Icon size={20} color="#dc2626" strokeWidth={3} />
              <span className="relative top-[1px] text-xs font-black uppercase text-red-600 sm:top-[2px] sm:text-base">
                {gTrans('unavailable')}
              </span>
            </>
          )}
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap gap-3">
        {isInCart && <span>Already in cart</span>}
        <button
          onClick={onAddToCartClick}
          className="inline-flex w-fit gap-2 rounded-full bg-accent-900 px-6 py-3 text-lg font-bold text-white"
        >
          {isAdding ? (
            <span>Loading...</span>
          ) : (
            <span className="relative top-[1px]">{gTrans('add-to-cart')}</span>
          )}
          <ShoppingBasketAdd01Icon strokeWidth={2} />
        </button>
        <button className="inline-flex w-fit gap-2 rounded-full bg-accent-100 px-6 py-3 text-lg font-bold text-black">
          <span className="relative top-[1px]">
            {gTrans('add-to-wishlist')}
          </span>
          <BookmarkAdd01Icon strokeWidth={2} />
        </button>
      </div>
    </>
  )
}
