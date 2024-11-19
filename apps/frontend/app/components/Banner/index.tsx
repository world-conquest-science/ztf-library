'use client'

import React, { useEffect, useState } from 'react'
import './banner.css'
import { BookCover } from '../BookCover'
import Link from 'next/link'
import { ArrowRight02Icon, ShoppingBasketAdd01Icon } from 'hugeicons-react'
import { useTranslations } from 'next-intl'
import api from '@ztf-library/api'
import { TQuote } from '@ztf-library/types'

const Banner = () => {
  const gTrans = useTranslations('Global')

  const [quotes, setQuotes] = useState<TQuote[]>()
  const [selectedQuoteId, setSelectedQuoteId] = useState(0)

  useEffect(() => {
    async function fetchQuotes() {
      const quotes = await api
        .with(process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY)
        .quote.getRandomQuote()

      if (!quotes) {
        return
      }

      setQuotes(quotes)
    }

    fetchQuotes()
  }, [])

  const onNextQuoteClick = () => {
    setSelectedQuoteId(id => (id === 0 ? 1 : 0))
  }

  return (
    <section className="homepage-banner flex flex-row">
      <div className="bookshelf-background" />
      <div className="bookshelf" />
      <div className="bookshelf-shadow" />
      <div className="container mx-auto h-auto">
        <div className="flex h-full flex-col sm:flex-row sm:justify-between">
          <div className="mb-8 flex w-full flex-col self-center px-6 py-4 sm:mb-0 sm:w-1/2 sm:p-0">
            <button
              className="mb-3 inline-flex w-fit"
              onClick={onNextQuoteClick}
            >
              <span>Next quote</span>
              <ArrowRight02Icon
                aria-hidden="true"
                className="ml-1 mt-[1px] h-5 w-5"
              />
            </button>
            {quotes ? (
              <p className="font-secondary text-xl font-black text-foreground sm:text-3xl sm:leading-[150%]">
                {quotes[selectedQuoteId].content}
              </p>
            ) : (
              <span>Loading...</span>
            )}
            {quotes ? (
              <h2 className="mt-5 text-lg sm:text-xl">
                <Link
                  href={quotes[selectedQuoteId].book.slug}
                  className="font-semibold"
                >
                  {quotes[selectedQuoteId].book.title}
                </Link>{' '}
                {gTrans('by')}{' '}
                <span>{quotes[selectedQuoteId].author.name}</span>
              </h2>
            ) : (
              <span>Loading...</span>
            )}
            <button className="mt-8 inline-flex w-fit gap-3 rounded-full bg-accent-900 px-6 py-4 text-lg font-bold tracking-tight text-white">
              {gTrans('order-now')}
              <ShoppingBasketAdd01Icon strokeWidth={2} />
            </button>
          </div>

          {/* Just one book cover on mobile view */}
          <div className="justify-left flex w-full px-6 sm:hidden">
            {quotes ? (
              <Link
                href={quotes[selectedQuoteId].book.slug}
                className="inline-block"
              >
                <BookCover
                  key={quotes[selectedQuoteId].book.slug}
                  pictureUrl={quotes[selectedQuoteId].book.thumbnail}
                  size="small"
                />
              </Link>
            ) : (
              <span>Loading...</span>
            )}
          </div>

          {/* 2 books cover for larger screens */}
          <div className="hidden w-full items-baseline justify-end self-end sm:flex sm:w-2/3 sm:gap-28">
            {quotes ? (
              quotes.map(({ book }, index) => (
                <Link href={book.slug} className="inline-block" key={book.slug}>
                  <BookCover
                    pictureUrl={book.thumbnail}
                    size={index === 0 ? 'big' : 'normal'}
                  />
                </Link>
              ))
            ) : (
              <span>Loading...</span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export { Banner }
