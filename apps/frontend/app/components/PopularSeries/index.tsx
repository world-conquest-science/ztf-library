import { generateCategoryUrl } from '@/app/helpers/routes'
import { TCategory } from '@ztf-library/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ISerieItem {
  category: TCategory
}

const SerieItem = ({ category }: ISerieItem) => (
  <li className="mt-2 flex-1 sm:mt-0">
    <Link
      href={generateCategoryUrl(category.slug)}
      className="relative flex w-full flex-row-reverse justify-end sm:flex-col"
    >
      <div className="relative sm:flex">
        <ul className="absolute right-[150px] top-[-25px] w-fit sm:relative sm:right-[-10%] sm:top-16">
          <li className="absolute left-0 top-0 w-[100px] sm:relative sm:w-[150px]">
            <Image
              src="/images/books/celebrity.png"
              alt={category.books![0].title}
              width={150}
              height={0}
              className="rounded-none"
            />
          </li>
          <li className="absolute -top-4 left-4 w-[100px] sm:absolute sm:w-[150px]">
            <Image
              src="/images/books/destinies.png"
              alt={category.books![1].title}
              width={150}
              height={0}
              className="rounded-none"
            />
          </li>
          <li className="absolute -top-8 left-8 w-[100px] sm:absolute sm:w-[150px]">
            <Image
              src="/images/books/dispositions.png"
              alt={category.books![2].title}
              width={150}
              height={0}
              className="rounded-none"
            />
          </li>
        </ul>
      </div>
      <div className="w-full rounded-none bg-background-50 p-10 sm:pb-5 sm:pt-20">
        <h6 className="text-md font-bold sm:text-xl">{category.title}</h6>
        <span className="text-sm sm:text-lg">
          {category.books?.length} books
        </span>
      </div>
    </Link>
  </li>
)

interface IPopularSeries {
  categories: TCategory[]
}

const PopularSeries = ({ categories }: IPopularSeries) => {
  return (
    <section className="mt-14 px-6 sm:px-0 sm:pt-28">
      <div className="container mx-auto">
        <header className="mb-5 flex flex-col items-start sm:mb-5 sm:flex-row sm:items-center sm:justify-between">
          <h4 className="text-2xl font-extrabold text-accent-dark sm:text-4xl">
            Popular series
          </h4>
          <Link
            href={generateCategoryUrl('')}
            className="text-base font-bold text-primary-600 underline underline-offset-4 sm:text-lg"
          >
            Show all
          </Link>
        </header>
        <ul className="flex flex-col gap-16 sm:flex-row sm:gap-10">
          {categories.map(category => (
            <SerieItem key={category.slug} category={category} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export { PopularSeries }
