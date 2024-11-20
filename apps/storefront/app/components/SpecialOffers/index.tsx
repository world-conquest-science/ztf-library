import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type TBook = {
  url: string
  coverUrl: string
}

const SpecialBookOfferItem = ({ coverUrl, url }: TBook) => {
  const gTrans = useTranslations('Global')

  return (
    <li className="w-[45vw] p-3 sm:w-auto sm:min-w-[500px] sm:p-0">
      <Link
        href={url}
        className="flex w-full flex-col overflow-hidden rounded-none sm:flex-row sm:justify-items-start"
      >
        <div className="w-full sm:w-auto sm:flex-1">
          <Image src={coverUrl} alt="Book name" width={300} height={0} />
        </div>
        <div className="flex flex-col justify-center bg-background-50 p-4 sm:w-1/2 sm:gap-3">
          <div>
            <h5 className="text-base font-bold text-accent-800 sm:text-xl">The way of life</h5>
            <h6 className="text-xs italic text-gray-500 sm:text-base">
              {gTrans('by')} Zacharias Tanee Fomum
            </h6>
          </div>
          <p className="hidden text-base text-black opacity-75 sm:inline-flex">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem recusandae natus officia
            earum odit numquam! Optio voluptas ea odit consequatur...
          </p>
          <p className="flex items-center gap-2">
            <span className="text-2xl font-extrabold text-accent-500">1.99€</span>
            <span className="text-sm font-normal text-gray-400 line-through decoration-1">
              10.99€
            </span>
          </p>
        </div>
      </Link>
    </li>
  )
}

const SpecialOffers = () => {
  const books = [
    {
      coverUrl: '/images/books/destinies.png',
      url: '1',
    },
    {
      coverUrl: '/images/books/way-of-life.png',
      url: '2',
    },
    {
      coverUrl: '/images/books/time.png',
      url: '3',
    },
    {
      coverUrl: '/images/books/laziness.png',
      url: '4',
    },
    {
      coverUrl: '/images/books/laziness.png',
      url: '5',
    },
    {
      coverUrl: '/images/books/laziness.png',
      url: '6',
    },
    {
      coverUrl: '/images/books/laziness.png',
      url: '7',
    },
    {
      coverUrl: '/images/books/laziness.png',
      url: '8',
    },
    {
      coverUrl: '/images/books/laziness.png',
      url: '9',
    },
    {
      coverUrl: '/images/books/laziness.png',
      url: '10',
    },
    {
      coverUrl: '/images/books/laziness.png',
      url: '11',
    },
  ]

  return (
    <section className="bg-white sm:w-full sm:py-20">
      <div className="overflow-x-scroll">
        <ol className="flex w-fit flex-nowrap justify-center px-3 sm:gap-10 sm:px-0">
          {books.map(book => (
            <SpecialBookOfferItem key={book.url} {...book} />
          ))}
        </ol>
      </div>
    </section>
  )
}

export { SpecialOffers }
