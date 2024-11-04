import React from 'react'
import './banner.css'
import { BookCover, TBookCover } from '../BookCover'
import Link from 'next/link'
import { ShoppingBasketAdd01Icon } from 'hugeicons-react'
import { useTranslations } from 'next-intl'

type TStandingBook = {
  pictureUrl: string
  url: string
  coverSize: TBookCover['size']
}

const Banner = () => {
  const gTrans = useTranslations('Global')

  const standingBooks: TStandingBook[] = [
    {
      pictureUrl: '/images/books/working-hard.png',
      url: 'the-way-of-life',
      coverSize: 'big',
    },
    {
      pictureUrl: '/images/books/faith.png',
      url: 'the-way-of-life',
      coverSize: 'normal',
    },
  ]

  return (
    <section className="homepage-banner flex flex-row">
      <div className="bookshelf-background" />
      <div className="bookshelf" />
      <div className="bookshelf-shadow" />
      <div className="container mx-auto h-auto">
        <div className="flex h-full flex-col sm:flex-row sm:justify-between">
          <div className="mb-8 flex w-full flex-col self-center px-6 py-4 sm:mb-0 sm:w-1/2 sm:p-0">
            <p className="font-secondary text-xl font-black text-foreground sm:text-3xl sm:leading-[150%]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos quam odio fuga.
              Aspernatur autem distinctio expedita ea vero quis, earum sed corporis?
            </p>
            <h2 className="mt-5 text-lg sm:text-xl">
              <Link href="" className="font-semibold">
                The Christian Way
              </Link>{' '}
              {gTrans('by')} <span>Zacharias Tanee Fomum</span>
            </h2>
            <button className="mt-8 inline-flex w-fit gap-3 rounded-full bg-accent-900 px-6 py-4 text-lg font-bold tracking-tight text-white">
              {gTrans('order-now')}
              <ShoppingBasketAdd01Icon strokeWidth={2} />
            </button>
          </div>

          {/* Just one book cover on mobile view */}
          <div className="justify-left flex w-full px-6 sm:hidden">
            <Link href={standingBooks[0].url} className="inline-block">
              <BookCover
                key={standingBooks[0].pictureUrl}
                pictureUrl={standingBooks[0].pictureUrl}
                size="small"
              />
            </Link>
          </div>

          {/* 2 books cover for larger screens */}
          <div className="hidden w-full items-baseline justify-end self-end sm:flex sm:w-2/3 sm:gap-28">
            {standingBooks.map(({ pictureUrl, coverSize, url }) => (
              <Link href={url} className="inline-block" key={pictureUrl}>
                <BookCover pictureUrl={pictureUrl} size={coverSize} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { Banner }
