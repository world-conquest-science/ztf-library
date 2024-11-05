import { BookCover } from '@/app/components/BookCover'
import { SimilarBooks } from '@/app/components/SimilarBooks'
import {
  BookmarkAdd01Icon,
  CheckmarkBadge01Icon,
  LinkSquare02Icon,
  ShoppingBasketAdd01Icon,
  HeadphonesIcon,
} from 'hugeicons-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

const BookDetailsPage = () => {
  const gTrans = useTranslations('Global')

  return (
    <>
      <section className="py-10">
        <div className="container mx-auto">
          <div className="flex flex-col px-6 sm:flex-row sm:gap-10">
            <aside className="flex justify-start sm:w-1/3 sm:justify-end">
              <span className="hidden sm:flex">
                <span className="relative right-[3vw] top-[5vh]">
                  <BookCover
                    key="/images/books/laziness.png"
                    pictureUrl="/images/books/laziness.png"
                    size="normal"
                  />
                </span>
              </span>
              <span className="sm:hidden">
                <BookCover
                  key="/images/books/laziness.png"
                  pictureUrl="/images/books/laziness.png"
                  size="small"
                />
              </span>
            </aside>
            <article className="flex flex-col gap-4 sm:w-2/3 sm:pt-6">
              {/* Title and author */}
              <header className="mt-3 flex flex-col">
                <h3 className="w-2/3 text-3xl font-bold text-accent-900 sm:text-5xl">
                  Deliverance from the sin of laziness
                </h3>
                <h6 className="text-base text-gray-500 sm:text-lg">Zacharias Tanee Fomum</h6>
              </header>

              <div className="flex flex-col gap-4 sm:w-2/3 sm:gap-8">
                {/* Formats and availability */}
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-bold uppercase">{gTrans('format')}</span>
                  <ul className="flex gap-4">
                    <li className="inline-flex rounded-sm bg-background-100 ring-2 ring-background-300">
                      <Link href="" className="inline-flex flex-col px-4 py-2">
                        <span className="text-sm font-light">Paperback</span>
                        <div className="inline-flex items-center gap-2">
                          <span className="text-sm line-through">10.99€</span>
                          <span className="text-lg font-black">1.99€</span>
                        </div>
                      </Link>
                    </li>
                    <li className="inline-flex rounded-sm bg-gray-50 ring-2 ring-gray-300">
                      <Link href="" className="inline-flex flex-col px-4 py-2">
                        <span className="text-sm font-light">Paperback</span>
                        <div className="inline-flex items-center gap-2">
                          <span className="text-sm line-through">10.99€</span>
                          <span className="text-lg font-black">1.99€</span>
                        </div>
                      </Link>
                    </li>
                  </ul>

                  <div className="inline-flex w-fit items-center gap-1">
                    <CheckmarkBadge01Icon size={20} color="#16a34a" strokeWidth={3} />
                    <span className="relative top-[1px] text-xs font-black uppercase text-green-600 sm:top-[2px] sm:text-base">
                      {gTrans('available')}
                    </span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <button className="inline-flex w-fit gap-2 rounded-full bg-accent-900 px-6 py-3 text-lg font-bold text-white">
                    <span className="relative top-[1px]">{gTrans('add-to-cart')}</span>
                    <ShoppingBasketAdd01Icon strokeWidth={2} />
                  </button>
                  <button className="inline-flex w-fit gap-2 rounded-full bg-accent-100 px-6 py-3 text-lg font-bold text-black">
                    <span className="relative top-[1px]">{gTrans('add-to-wishlist')}</span>
                    <BookmarkAdd01Icon strokeWidth={2} />
                  </button>
                </div>

                {/* External links */}
                <div className="flex flex-row flex-wrap gap-4">
                  <Link href="" className="inline-flex w-fit gap-1 py-2 tracking-tighter">
                    <HeadphonesIcon color="#105ba3" size={18} strokeWidth={3} />
                    <span className="font-bold text-primary-700">
                      {gTrans('listen-to-this-book')}
                    </span>
                  </Link>
                  <Link href="" className="inline-flex w-fit gap-1 py-2 tracking-tighter">
                    <LinkSquare02Icon color="#105ba3" size={18} strokeWidth={3} />
                    <span className="font-bold text-primary-700">
                      {gTrans('get-the-ebook-version')}
                    </span>
                  </Link>
                </div>

                {/* Preface */}
                <div>
                  <h6 className="text-xl font-bold sm:text-3xl">{gTrans('description')}</h6>
                  <p className="text-base leading-normal text-gray-700 sm:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt asperiores
                    tenetur, labore voluptatem quo molestiae quae debitis velit dolore iste
                    consequuntur illum eos. Reprehenderit deleniti perferendis atque tempora nisi
                    pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
                    asperiores tenetur, labore voluptatem quo molestiae quae debitis velit dolore
                    iste consequuntur illum eos. Reprehenderit deleniti perferendis atque tempora
                    nisi pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
                    asperiores tenetur, labore voluptatem quo molestiae quae debitis velit dolore
                    iste consequuntur illum eos. Reprehenderit deleniti perferendis atque tempora
                    nisi pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
                    asperiores tenetur, labore voluptatem quo molestiae quae debitis velit dolore
                    iste consequuntur illum eos. Reprehenderit deleniti perferendis atque tempora
                    nisi pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
                    asperiores tenetur, labore voluptatem quo molestiae quae debitis velit dolore
                    iste consequuntur illum eos. Reprehenderit deleniti perferendis atque tempora
                    nisi pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
                    asperiores tenetur, labore voluptatem quo molestiae quae debitis velit dolore
                    iste consequuntur illum eos. Reprehenderit deleniti perferendis atque tempora
                    nisi pariatur?
                  </p>
                </div>

                {/* Details */}
                <div>
                  <h6 className="text-xl font-bold sm:text-3xl">{gTrans('details')}</h6>
                  <ul className="flex flex-col gap-1">
                    <li className="inline-flex gap-1">
                      <span className="text-gray-500 underline underline-offset-2 sm:text-lg">
                        {gTrans('price')}
                      </span>
                      <div className="inline-flex items-center gap-1 text-gray-700">
                        <span className="text-sm line-through sm:text-base">10.99€</span>
                        <span className="text-base font-bold sm:text-lg">1.99€</span>
                      </div>
                    </li>
                    <li className="inline-flex gap-1 sm:text-lg">
                      <span className="text-gray-500 underline underline-offset-2">
                        {gTrans('publisher')}
                      </span>
                      <span className="font-medium text-gray-700">Thomas Nelson</span>
                    </li>
                    <li className="inline-flex gap-1 sm:text-lg">
                      <span className="text-gray-500 underline underline-offset-2">
                        {gTrans('publish-date')}
                      </span>
                      <span className="font-medium text-gray-700">August 07, 2018</span>
                    </li>
                    <li className="inline-flex gap-1 sm:text-lg">
                      <span className="text-gray-500 underline underline-offset-2">
                        {gTrans('cover')}
                      </span>
                      <span className="font-medium text-gray-700">Jacques Maré</span>
                    </li>
                    <li className="inline-flex gap-1 sm:text-lg">
                      <span className="text-gray-500 underline underline-offset-2">
                        {gTrans('pages')}
                      </span>
                      <span className="font-medium text-gray-700">218</span>
                    </li>
                    <li className="inline-flex gap-1 sm:text-lg">
                      <span className="text-gray-500 underline underline-offset-2">
                        {gTrans('language')}
                      </span>
                      <span className="font-medium text-gray-700">English</span>
                    </li>
                    <li className="inline-flex gap-1 sm:text-lg">
                      <span className="text-gray-500 underline underline-offset-2">
                        {gTrans('dimensions')}
                      </span>
                      <span className="font-medium text-gray-700">
                        5.4 x 8.3 x 0.8 inches | 0.45 pounds
                      </span>
                    </li>
                    <li className="inline-flex gap-1 sm:text-lg">
                      <span className="text-gray-500 underline underline-offset-2">
                        {gTrans('types')}
                      </span>
                      <span className="font-medium text-gray-700">Paperback</span>
                    </li>
                    <li className="inline-flex gap-1 sm:text-lg">
                      <span className="text-gray-500 underline underline-offset-2">
                        {gTrans('isbn')}
                      </span>
                      <span className="font-medium text-gray-700">9128U1NAZAHU1921208AH</span>
                    </li>
                  </ul>
                </div>

                {/* About the author */}
                <div>
                  <h6 className="text-xl font-bold sm:text-3xl">{gTrans('about-the-author')}</h6>
                  <p className="text-base leading-normal text-gray-700 sm:text-lg">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed similique iure est
                    neque, natus distinctio possimus corrupti excepturi accusantium laudantium ut
                    autem cum nisi quis dolorum suscipit recusandae expedita. Pariatur! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Non maiores voluptatibus animi
                    dolorum libero modi assumenda ratione harum facere quidem cupiditate, odio id
                    tenetur unde rem facilis, fugit, in est! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Unde repellendus, veniam maxime architecto dolore nisi ut,
                    tempore totam ipsam reiciendis sit et voluptas assumenda ea repellat porro
                    adipisci voluptate fugit!
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <SimilarBooks />
    </>
  )
}

export default BookDetailsPage
