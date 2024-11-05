import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BookItem = () => {
  return (
    <li className="overflow-hidden rounded-none">
      <Link
        href={'url'}
        className="flex w-full flex-col overflow-hidden rounded-none sm:flex-row sm:justify-items-start"
      >
        <div className="w-full sm:w-auto sm:flex-1">
          <Image src="/images/books/destinies.png" alt="Book name" width={250} height={0} />
        </div>
      </Link>
    </li>
  )
}

const SimilarBooks = () => {
  const gTrans = useTranslations('Global')

  return (
    <section className="mt-10 bg-white px-6 sm:mt-20 sm:px-0">
      <div className="container mx-auto">
        <header className="mb-5 flex flex-col items-start sm:mb-3 sm:flex-row sm:items-center sm:justify-between">
          <h4 className="text-2xl font-extrabold text-accent-dark sm:text-4xl">
            {gTrans('from-the-same-serie')}
          </h4>
          <button className="text-base font-bold text-primary-600 underline underline-offset-4 sm:text-lg">
            {gTrans('show-all')}
          </button>
        </header>
        <div className="overflow-x-scroll">
          <ul className="grid grid-cols-2 gap-5 sm:grid-cols-6 sm:gap-10">
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
          </ul>
        </div>
      </div>
    </section>
  )
}

export { SimilarBooks }
