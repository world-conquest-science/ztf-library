import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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

const Books = () => {
  const books = new Array(76).fill({ url: '' }).map((item, index) => ({
    ...item,
    url: index.toString(),
  }))

  return (
    <section className="px-6 sm:px-0 sm:pt-28">
      <div className="container mx-auto">
        <ul className="grid grid-cols-2 gap-5 sm:grid-cols-6 sm:gap-10">
          {books.map(book => (
            <BookItem key={book.url} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export { Books }
