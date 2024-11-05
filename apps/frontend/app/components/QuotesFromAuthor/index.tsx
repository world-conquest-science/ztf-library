import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const QuotesFromAuthor = () => {
  const gTrans = useTranslations('Global')

  return (
    <article className="mt-10 rounded-[35px] bg-background-base px-6 py-14 sm:mt-28 sm:rounded-[100px] sm:px-0 sm:pb-28 sm:pt-36">
      <div className="container mx-auto flex flex-col gap-5 sm:gap-0">
        <div className="flex flex-col gap-3 text-foreground sm:flex-col-reverse sm:pr-[15vw]">
          <h5 className="font-light tracking-normal underline decoration-1 underline-offset-4 sm:text-xl">
            {gTrans('quote-from')} <a href="url">The way of life</a>
          </h5>
          <p className="font-secondary text-lg font-bold sm:text-4xl sm:font-semibold sm:leading-[155%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, rerum nostrum animi.
            Neque, ut qui. Minima, rerum nostrum animi, a molestias ab doloremque aliquam optio
            facilis quo aperiam odio at totam velit nam earum. Neque, ut qui. Minima, rerum nostrum
            animi, a molestias ab doloremque aliquam optio facilis quo aperiam odio at.
          </p>
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:items-end sm:justify-end sm:gap-10">
          <div className="flex flex-col items-start gap-2 sm:w-1/3 sm:items-end sm:pb-1">
            <header className="text-lg font-bold text-foreground sm:text-xl">
              Théodore Andoseh
            </header>
            <p className="text-sm font-light text-foreground sm:text-right sm:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit veritatis
              beatae pariatur cupiditate illum. Cum, qui sapiente? Ipsum rem nulla quo. Veritatis
              beatae pariatur cupiditate illum. Cum, qui sapiente? Ipsum rem nulla quo.
            </p>
          </div>
          <Image
            src="https://images.pexels.com/photos/7492430/pexels-photo-7492430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={250}
            height={1}
            className="my-3 rounded-3xl"
          />
        </div>
      </div>
    </article>
  )
}

export { QuotesFromAuthor }
