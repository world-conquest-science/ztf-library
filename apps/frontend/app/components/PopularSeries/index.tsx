import { generateCategoryUrl } from '@/app/helpers/routes'
import { TCategory } from '@ztf-library/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CategoryItem } from '../CategoryItem'

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
            <CategoryItem key={category.slug} category={category} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export { PopularSeries }
