import { generateBookUrl } from '@/app/helpers/routes'
import { TQuote } from '@ztf-library/types'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IQuote {
  quote: TQuote
}

const Quote = ({ quote }: IQuote) => {
  const gTrans = useTranslations('Global')

  return (
    <article className="mt-10 rounded-[35px] bg-background-base px-6 py-14 sm:mt-28 sm:rounded-[100px] sm:px-0 sm:pb-28 sm:pt-36">
      <div className="container mx-auto flex flex-col gap-5 sm:gap-0">
        <div className="flex flex-col gap-3 text-foreground sm:flex-col-reverse sm:pr-[15vw]">
          <h5 className="font-light tracking-normal sm:text-xl">
            {gTrans('quote-from')}{' '}
            <Link
              href={generateBookUrl(quote.book.slug)}
              className="underline decoration-1 underline-offset-4"
            >
              {quote.book.title}
            </Link>
          </h5>
          <p className="font-secondary text-lg font-bold sm:text-4xl sm:font-semibold sm:leading-[155%]">
            {quote.content}
          </p>
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:items-end sm:justify-end sm:gap-10">
          <div className="flex flex-col items-start gap-2 sm:w-1/3 sm:items-end sm:pb-1">
            <header className="text-lg font-bold text-foreground sm:text-xl">
              {quote.author.name}
            </header>
            <p className="text-sm font-light text-foreground sm:text-right sm:text-lg">
              {quote.author.about}
            </p>
          </div>
          <Image
            src={quote.author.photo_url}
            alt={quote.author.name}
            width={250}
            height={1}
            className="my-3 rounded-3xl"
          />
        </div>
      </div>
    </article>
  )
}

export { Quote }
