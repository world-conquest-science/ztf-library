import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SerieItem = () => (
  <li className="mt-2 flex-1 sm:mt-0">
    <Link href="" className="relative flex w-full flex-row-reverse justify-end sm:flex-col">
      <div className="relative sm:flex">
        <ul className="absolute right-[150px] top-[-25px] w-fit sm:relative sm:right-[-10%] sm:top-16">
          <li className="absolute left-0 top-0 w-[100px] sm:relative sm:w-[150px]">
            <Image
              src="/images/books/celebrity.png"
              alt="Book name"
              width={150}
              height={0}
              className="rounded-none"
            />
          </li>
          <li className="absolute -top-4 left-4 w-[100px] sm:absolute sm:w-[150px]">
            <Image
              src="/images/books/destinies.png"
              alt="Book name"
              width={150}
              height={0}
              className="rounded-none"
            />
          </li>
          <li className="absolute -top-8 left-8 w-[100px] sm:absolute sm:w-[150px]">
            <Image
              src="/images/books/dispositions.png"
              alt="Book name"
              width={150}
              height={0}
              className="rounded-none"
            />
          </li>
        </ul>
      </div>
      <div className="w-full rounded-none bg-background-50 p-10 sm:pb-5 sm:pt-20">
        <h6 className="text-md font-bold sm:text-xl">The christian way</h6>
        <span className="text-sm sm:text-lg">13 books</span>
      </div>
    </Link>
  </li>
)

const AllCategoriesPage = () => {
  const series = [
    {
      url: '1',
    },
    {
      url: '2',
    },
    {
      url: '3',
    },
    {
      url: '4',
    },
    {
      url: '5',
    },
    {
      url: '6',
    },
    {
      url: '7',
    },
  ]

  return (
    <section className="px-6 pt-10 sm:px-0 sm:pt-14">
      <div className="container mx-auto">
        <header className="mb-5 flex flex-col items-start sm:mb-5 sm:flex-row sm:items-center sm:justify-between">
          <h4 className="text-2xl font-extrabold text-accent-dark sm:text-4xl">All categories</h4>
        </header>
        <ul className="grid gap-16 sm:grid-cols-[repeat(auto-fill,18%)] sm:gap-10">
          {series.map(serie => (
            <SerieItem key={serie.url} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default AllCategoriesPage
