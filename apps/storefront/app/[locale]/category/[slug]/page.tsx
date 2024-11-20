import React from 'react'
import { BookshelfSection } from '@/app/components/BookshelfSection'
import { Books } from '@/app/components/Books'
import { BookCover } from '@/app/components/BookCover'
import { LibraryIcon } from 'hugeicons-react'
import { IPageWithSlug } from '@/app/types'
import { getCategoryBySlug } from '@/app/api/categories'
import { getRandomItems } from '@/app/helpers/random'
import Link from 'next/link'
import { generateBookUrl } from '@/app/helpers/routes'

export default async function CategoryPage({
  params,
}: {
  params: Promise<IPageWithSlug>
}) {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) return

  const randomBook = getRandomItems(category.books!, 1).at(0)

  if (!randomBook) return

  return (
    <>
      <BookshelfSection>
        <div className="container z-[1] mx-auto">
          <div className="flex flex-col-reverse items-start px-6 sm:flex-row sm:items-end">
            <Link
              href={generateBookUrl(randomBook.slug)}
              className="relative mt-10 sm:mt-20"
            >
              <BookCover
                key={randomBook.slug}
                pictureUrl="/images/books/goals.png"
                size="small"
              />
            </Link>

            <header className="mt-10 flex flex-col gap-2 sm:mb-24 sm:ml-10 sm:mt-0 sm:w-1/3">
              <h3 className="inline-flex items-center gap-1 text-3xl font-bold">
                <LibraryIcon size={32} strokeWidth={2} />
                <span className="relative top-[3px]">{category.title}</span>
              </h3>
              <p className="opacity-75">{category.description}</p>
            </header>
          </div>
        </div>
      </BookshelfSection>
      <Books
        key={category.slug}
        category={category}
        showHeader={false}
        asSlider={false}
      />
    </>
  )
}
