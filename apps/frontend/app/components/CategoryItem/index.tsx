import { generateCategoryUrl } from '@/app/helpers/routes'
import { TCategory } from '@ztf-library/types'
import Image from 'next/image'
import Link from 'next/link'

interface ICategoryItem {
  category: TCategory
}

const CategoryItem = ({ category }: ICategoryItem) => (
  <li className="mt-2 flex-1 sm:mt-0">
    <Link
      href={generateCategoryUrl(category.slug)}
      className="relative flex w-full flex-row-reverse justify-end sm:flex-col"
    >
      <div className="relative sm:flex">
        <ul className="absolute right-[150px] top-[-25px] w-fit sm:relative sm:right-[-10%] sm:top-16">
          <li className="absolute left-0 top-0 w-[100px] sm:relative sm:w-[150px]">
            <Image
              src="/images/books/celebrity.png"
              alt={category.books![0].title}
              width={150}
              height={0}
              className="rounded-none"
            />
          </li>
          <li className="absolute -top-4 left-4 w-[100px] sm:absolute sm:w-[150px]">
            <Image
              src="/images/books/destinies.png"
              alt={category.books![1].title}
              width={150}
              height={0}
              className="rounded-none"
            />
          </li>
          <li className="absolute -top-8 left-8 w-[100px] sm:absolute sm:w-[150px]">
            <Image
              src="/images/books/dispositions.png"
              alt={category.books![2].title}
              width={150}
              height={0}
              className="rounded-none"
            />
          </li>
        </ul>
      </div>
      <div className="w-full rounded-none bg-background-50 p-10 sm:pb-5 sm:pt-20">
        <h6 className="text-md font-bold sm:text-xl">{category.title}</h6>
        <span className="text-sm sm:text-lg">
          {category.books?.length} books
        </span>
      </div>
    </Link>
  </li>
)

export { CategoryItem }
