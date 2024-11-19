import React from 'react'
import { BookCover } from '@/app/components/BookCover'
import {
  BookmarkAdd01Icon,
  CheckmarkBadge01Icon,
  LinkSquare02Icon,
  ShoppingBasketAdd01Icon,
  HeadphonesIcon,
  Cancel01Icon,
} from 'hugeicons-react'
import { intlFormat } from 'date-fns'
import { getTranslations } from 'next-intl/server'
import { IPageWithSlug } from '@/app/types'
import { getBookBySlug } from '@/app/api/books'
import { formatPrice } from '@/app/helpers/price'
import { Books } from '@/app/components/Books'
import { getCategoryBySlug } from '@/app/api/categories'

const selectedFormatId = 0

export default async function BookDetailsPage({
  params,
}: {
  params: Promise<IPageWithSlug>
}) {
  const gTrans = await getTranslations('Global')

  const { slug } = await params
  const book = await getBookBySlug(slug)
  const category = await getCategoryBySlug(book?.categories[0]!.slug!)

  if (!book || !category) return

  return (
    <>
      <section className="py-10">
        <div className="container mx-auto">
          <div className="flex flex-col px-6 sm:flex-row sm:gap-10">
            <aside className="flex justify-start sm:w-1/3 sm:justify-end">
              <span className="hidden sm:flex">
                <span className="relative right-[3vw] top-[5vh]">
                  <BookCover
                    key={book.slug}
                    pictureUrl={book.image_url}
                    size="normal"
                  />
                </span>
              </span>
              <span className="sm:hidden">
                <BookCover
                  key={book.slug}
                  pictureUrl={book.image_url}
                  size="small"
                />
              </span>
            </aside>
            <article className="flex flex-col gap-4 sm:w-2/3 sm:pt-6">
              {/* Title and author */}
              <header className="mt-3 flex flex-col">
                <h3 className="w-2/3 text-3xl font-bold text-accent-900 sm:text-5xl">
                  {book.title}
                </h3>
                <h6 className="text-base text-gray-500 sm:text-lg">
                  {book.author.name}
                </h6>
              </header>

              <div className="flex flex-col gap-4 sm:w-2/3 sm:gap-8">
                {/* Formats and availability */}
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-bold uppercase">
                    {gTrans('format')}
                  </span>
                  <ul className="flex gap-4">
                    {book.formats.map(format => (
                      <li
                        key={format.label}
                        className="inline-flex rounded-sm bg-background-100 ring-2 ring-background-300"
                      >
                        <span className="inline-flex flex-col px-4 py-2">
                          <span className="text-sm font-light">
                            {format.label}
                          </span>
                          <div className="inline-flex items-center gap-2">
                            {/* <span className="text-sm line-through">{format.prices[0]!.amount}</span> */}
                            <span className="text-lg font-black">
                              {formatPrice(format.prices[0]!.amount)}
                            </span>
                          </div>
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="inline-flex w-fit items-center gap-1">
                    {book.formats[selectedFormatId].is_available ? (
                      <>
                        <CheckmarkBadge01Icon
                          size={20}
                          color="#16a34a"
                          strokeWidth={3}
                        />
                        <span className="relative top-[1px] text-xs font-black uppercase text-green-600 sm:top-[2px] sm:text-base">
                          {gTrans('available')}
                        </span>
                      </>
                    ) : (
                      <>
                        <Cancel01Icon
                          size={20}
                          color="#dc2626"
                          strokeWidth={3}
                        />
                        <span className="relative top-[1px] text-xs font-black uppercase text-red-600 sm:top-[2px] sm:text-base">
                          {gTrans('unavailable')}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <button className="inline-flex w-fit gap-2 rounded-full bg-accent-900 px-6 py-3 text-lg font-bold text-white">
                    <span className="relative top-[1px]">
                      {gTrans('add-to-cart')}
                    </span>
                    <ShoppingBasketAdd01Icon strokeWidth={2} />
                  </button>
                  <button className="inline-flex w-fit gap-2 rounded-full bg-accent-100 px-6 py-3 text-lg font-bold text-black">
                    <span className="relative top-[1px]">
                      {gTrans('add-to-wishlist')}
                    </span>
                    <BookmarkAdd01Icon strokeWidth={2} />
                  </button>
                </div>

                {/* External links */}
                <div className="flex flex-row flex-wrap gap-4">
                  <a
                    href={book.audio_version_url}
                    target="_blank"
                    className="inline-flex w-fit gap-1 py-2 tracking-tighter"
                  >
                    <HeadphonesIcon color="#105ba3" size={18} strokeWidth={3} />
                    <span className="font-bold text-primary-700">
                      {gTrans('listen-to-this-book')}
                    </span>
                  </a>
                  <a
                    href={book.ebook_version_url}
                    target="_blank"
                    className="inline-flex w-fit gap-1 py-2 tracking-tighter"
                  >
                    <LinkSquare02Icon
                      color="#105ba3"
                      size={18}
                      strokeWidth={3}
                    />
                    <span className="font-bold text-primary-700">
                      {gTrans('get-the-ebook-version')}
                    </span>
                  </a>
                </div>

                {/* Preface */}
                <div>
                  <h6 className="text-xl font-bold sm:text-3xl">
                    {gTrans('description')}
                  </h6>
                  <p className="whitespace-pre-line text-base leading-normal text-gray-700 sm:text-lg">
                    {book.description}
                  </p>
                </div>

                {/* Details */}
                <div>
                  <h6 className="text-xl font-bold sm:text-3xl">
                    {gTrans('details')}
                  </h6>
                  <ul className="flex flex-col gap-1">
                    <li className="inline-flex gap-1">
                      <span className="text-gray-500 underline underline-offset-2 sm:text-lg">
                        {gTrans('price')}
                      </span>
                      <div className="inline-flex items-center gap-1 text-gray-700">
                        {/* <span className="text-sm line-through sm:text-base">
                          10.99€
                        </span> */}
                        <span className="text-base font-bold sm:text-lg">
                          {formatPrice(
                            book.formats[selectedFormatId].prices[0]!.amount,
                          )}
                        </span>
                      </div>
                    </li>
                    <li className="inline-flex gap-1 sm:text-lg">
                      <span className="text-gray-500 underline underline-offset-2">
                        {gTrans('publisher')}
                      </span>
                      <span className="font-medium text-gray-700">
                        {book.publisher}
                      </span>
                    </li>
                    <li className="inline-flex gap-1 sm:text-lg">
                      <span className="text-gray-500 underline underline-offset-2">
                        {gTrans('publish-date')}
                      </span>
                      <span className="font-medium text-gray-700">
                        {intlFormat(new Date(book.publish_date))}
                      </span>
                    </li>
                    <li className="inline-flex gap-1 sm:text-lg">
                      <span className="text-gray-500 underline underline-offset-2">
                        {gTrans('pages')}
                      </span>
                      <span className="font-medium text-gray-700">
                        {book.pages_count}
                      </span>
                    </li>
                    <li className="inline-flex gap-1 sm:text-lg">
                      <span className="text-gray-500 underline underline-offset-2">
                        {gTrans('language')}
                      </span>
                      <span className="font-medium text-gray-700">
                        {gTrans(book.language.code)}
                      </span>
                    </li>
                    <li className="inline-flex gap-1 sm:text-lg">
                      <span className="text-gray-500 underline underline-offset-2">
                        {gTrans('dimensions')}
                      </span>
                      <span className="font-medium text-gray-700">
                        {book.dimensions}
                      </span>
                    </li>
                    <li className="inline-flex gap-1 sm:text-lg">
                      <span className="text-gray-500 underline underline-offset-2">
                        {gTrans('types')}
                      </span>
                      <span className="font-medium text-gray-700">
                        {book.formats.map(format => format.label).join(', ')}
                      </span>
                    </li>
                    <li className="inline-flex gap-1 sm:text-lg">
                      <span className="text-gray-500 underline underline-offset-2">
                        {gTrans('isbn')}
                      </span>
                      <span className="font-medium text-gray-700">
                        {book.isbn}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* About the author */}
                <div>
                  <h6 className="text-xl font-bold sm:text-3xl">
                    {gTrans('about-the-author')}
                  </h6>
                  <p className="whitespace-pre-line text-base leading-normal text-gray-700 sm:text-lg">
                    {book.author.about}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Books
        key={category.slug}
        category={category}
        showHeader={false}
        asSlider={false}
      />
    </>
  )
}
