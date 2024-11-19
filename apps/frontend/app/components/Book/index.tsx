import React from 'react'
import { generateBookUrl } from '@/app/helpers/routes'
import { TBook } from '@ztf-library/types'
import Image from 'next/image'
import Link from 'next/link'

interface IBookItem {
  book: TBook
  innerRef?: (node?: Element | null | undefined) => void
}

const BookItem = ({ book, innerRef }: IBookItem) => {
  return (
    <React.Fragment>
      <li
        className="w-[40vw] p-3 pl-0 sm:w-auto sm:min-w-[200px] sm:p-0"
        ref={innerRef}
      >
        <Link
          href={generateBookUrl(book.slug)}
          className="flex w-full flex-col overflow-hidden rounded-none sm:flex-row sm:justify-items-start"
        >
          <div className="w-full sm:w-auto sm:flex-1">
            <Image
              src="/images/books/destinies.png"
              alt="Book name"
              width={300}
              height={0}
            />
          </div>
        </Link>
      </li>
    </React.Fragment>
  )
}

export { BookItem }
