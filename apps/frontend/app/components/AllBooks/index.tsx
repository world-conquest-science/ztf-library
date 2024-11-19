'use client'

import React, { useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from '@tanstack/react-query'

import { BookItem } from '../Book'
import { fetchPaginatedBooks, BOOKS_COUNT_PER_PAGE } from '@/app/api/books'

const AllBooks = () => {
  const gTrans = useTranslations('Global')
  const { ref, inView } = useInView()

  const {
    data: books,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['books'],
    queryFn: fetchPaginatedBooks,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage?.count === BOOKS_COUNT_PER_PAGE
        ? allPages.length * BOOKS_COUNT_PER_PAGE
        : undefined
    },
  })

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage, hasNextPage])

  return (
    <section className="mt-14 px-6 sm:px-0 sm:pt-28">
      <div className="container mx-auto">
        <header className="mb-5 flex flex-col items-start sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
          <h4 className="text-2xl font-extrabold text-accent-dark sm:text-4xl">
            {gTrans('browse-all')}
          </h4>
        </header>
        <ul className="grid grid-cols-2 gap-5 sm:grid-cols-6 sm:gap-10">
          {books &&
            books.pages.map(page =>
              page?.data.map(book => (
                <BookItem key={book.slug} book={book} innerRef={ref} />
              )),
            )}
        </ul>
      </div>
    </section>
  )
}

export { AllBooks }
