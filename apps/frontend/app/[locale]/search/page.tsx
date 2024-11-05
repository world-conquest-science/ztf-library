import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ArrowDown01Icon, MoneyBag01Icon, UserIcon } from 'hugeicons-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BookItem = () => {
  return (
    <li className="overflow-hidden rounded-lg bg-background-50 p-3 sm:p-5">
      <Link href={'url'} className="">
        <div className="mb-3 overflow-hidden rounded-lg">
          <Image src="/images/books/destinies.png" alt="Book name" width={300} height={0} />
        </div>
        <div className="px-1 sm:px-1">
          <h1 className="text-base font-semibold sm:text-lg">
            Deliverance from the sin of laziness
          </h1>
          <span className="text-sm sm:text-base">0.99€</span>
        </div>
      </Link>
    </li>
  )
}

const SearchPage = () => {
  const books = new Array(32).fill({ url: '' }).map((item, index) => ({
    ...item,
    url: index.toString(),
  }))

  return (
    <section className="my-6 px-6">
      <div className="container mx-auto">
        <header className="flex gap-3">
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="inline-flex w-full items-center justify-center gap-x-2 rounded-full bg-gray-50 px-3 py-2">
              <MoneyBag01Icon size={18} />
              <span className="relative top-[1px] font-medium">Price</span>
              <ArrowDown01Icon className="h-5 w-5" />
            </MenuButton>

            <MenuItems
              transition
              className="absolute left-0 z-10 mt-4 w-56 origin-top-right overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="flex flex-col py-2">
                <MenuItem>
                  <div className="block px-4 py-2 text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                    Paid
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="block px-4 py-2 text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                    Special offers
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="block px-4 py-2 text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                    Free
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="block px-4 py-2 text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                    All prices
                  </div>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>

          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="inline-flex w-full items-center justify-center gap-x-2 rounded-full bg-gray-50 px-3 py-2">
              <UserIcon size={18} />
              <span className="relative top-[1px] font-medium">Author</span>
              <ArrowDown01Icon className="h-5 w-5" />
            </MenuButton>

            <MenuItems
              transition
              className="absolute left-0 z-10 mt-4 w-56 origin-top-right overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="flex flex-col py-2">
                <MenuItem>
                  <div className="block px-4 py-2 text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                    Zacharias Tanee Fomum
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="block px-4 py-2 text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                    Théodore Andoseh
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="block px-4 py-2 text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                    Boniface Menye
                  </div>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </header>

        <div className="py-10">
          <ul className="grid grid-cols-2 gap-5 sm:grid-cols-6 sm:gap-10">
            {books.map(book => (
              <BookItem key={book.url} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SearchPage
