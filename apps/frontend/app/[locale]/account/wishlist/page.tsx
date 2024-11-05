import { Bookmark01Icon, ShoppingBasketAdd01Icon } from 'hugeicons-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WishlistPage = () => {
  const t = useTranslations('AccountSettings.wishlist')
  const gTrans = useTranslations('Global')

  return (
    <div>
      <header className="my-3 flex items-center gap-2 sm:mb-10 sm:mt-5">
        <Bookmark01Icon size={30} className="relative top-[-2px]" strokeWidth={2} />
        <h1 className="text-2xl font-bold sm:text-3xl">{t('title')}</h1>
      </header>
      <div className="mt-6">
        <ul className="flex flex-row flex-wrap gap-3 sm:flex-row sm:gap-6">
          <li className="flex w-[48%] sm:w-fit">
            <Link href="" className="flex flex-col overflow-hidden rounded-lg bg-background-50 p-3">
              <Image
                src="/images/books/destinies.png"
                alt="Book name"
                width={175}
                height={0}
                className="rounded-lg"
              />
              <div className="mt-5 flex flex-col items-start justify-start gap-3 px-2 text-left">
                <button className="inline-flex gap-1 tracking-tight sm:gap-2">
                  <span className="text-sm font-medium sm:text-lg">{gTrans('add-to-cart')}</span>
                  <ShoppingBasketAdd01Icon className="size-4 sm:size-6" strokeWidth={2} />
                </button>
                <button className="inline-flex justify-start gap-2 tracking-tight">
                  <span className="text-sm font-medium sm:text-lg">{gTrans('remove')}</span>
                </button>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default WishlistPage
