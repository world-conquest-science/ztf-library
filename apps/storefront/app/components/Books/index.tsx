import { generateCategoryUrl } from '@/app/helpers/routes'
import { TCategory } from '@ztf-library/types'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'
import { BookItem } from '../Book'

interface IBooks {
  showHeader?: boolean
  asSlider?: boolean
  category: TCategory
}

const Books = ({ category, showHeader = true, asSlider = true }: IBooks) => {
  const gTrans = useTranslations('Global')

  return (
    <section className="mt-10 bg-white px-6 sm:mt-20 sm:px-0">
      <div className="container mx-auto">
        {showHeader && (
          <header className="flex flex-col items-start sm:mb-3 sm:flex-row sm:items-center sm:justify-between">
            <h4 className="text-2xl font-extrabold text-accent-dark sm:text-4xl">
              {category.title}
            </h4>
            <Link
              href={generateCategoryUrl(category.slug)}
              className="text-base font-bold text-primary-600 underline underline-offset-4 sm:text-lg"
            >
              {gTrans('show-all')}
            </Link>
          </header>
        )}
        <div className="overflow-x-scroll">
          <ul
            className={
              asSlider
                ? 'my-5 flex w-fit flex-nowrap justify-center sm:gap-10'
                : 'grid grid-cols-2 gap-5 sm:grid-cols-6 sm:gap-10'
            }
          >
            {category.books?.map(book => (
              <BookItem key={book.slug} book={book} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export { Books }
