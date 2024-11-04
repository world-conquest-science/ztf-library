'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useTranslations } from 'use-intl'

const BookItem = () => {
  return (
    <li className="overflow-hidden rounded-none">
      <Link href={'url'} className="">
        <div className="">
          <Image src="/images/books/destinies.png" alt="Book name" width={300} height={0} />
        </div>
      </Link>
    </li>
  )
}

const InfiniteBrowser = () => {
  const gTrans = useTranslations('Global')

  const books = new Array(76).fill({ url: '' }).map((item, index) => ({
    ...item,
    url: index.toString(),
  }))

  return (
    <section className="mt-14 px-6 sm:px-0 sm:pt-28">
      <div className="container mx-auto">
        <header className="mb-5 flex flex-col items-start sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
          <h4 className="text-2xl font-extrabold text-accent-dark sm:text-4xl">
            {gTrans('browse-all')}
          </h4>
        </header>
        <ul className="grid grid-cols-2 gap-5 sm:grid-cols-5 sm:gap-10">
          {books.map(book => (
            <BookItem key={book.url} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export { InfiniteBrowser }
