import {
  MinusSignIcon,
  PlusSignIcon,
  ShoppingBasketDone01Icon,
  ShoppingBasketRemove01Icon,
} from 'hugeicons-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function CartPage() {
  return (
    <section className="mt-6">
      <div className="container mx-auto">
        <div className="flex flex-col gap-3 px-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-20 sm:px-0">
          <aside className="sm:w-2/3">
            {/* Header */}
            <header className="mb-3 flex justify-between">
              <h6 className="text-2xl font-bold sm:text-3xl">Your cart</h6>
              <button className="flex items-center gap-2">
                <span className="relative top-[2px] font-medium text-red-600">
                  Empty cart
                </span>
                <ShoppingBasketRemove01Icon
                  size={18}
                  strokeWidth={2}
                  color="#dc2626"
                />
              </button>
            </header>

            {/* Books list */}
            <div className="pb-3">
              <div className="relative overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-500">
                  <thead className="text-xs uppercase text-gray-700 sm:text-sm">
                    <tr>
                      <th scope="col" className="py-3">
                        Book
                      </th>
                      <th scope="col" className="py-3">
                        Quantity
                      </th>
                      <th scope="col" className="py-3 sm:text-right">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr className="bg-white">
                      <td className="whitespace-nowrap py-2 pr-6 font-medium text-gray-900">
                        <Link href={'url'} className="inline-flex">
                          <div className="inline-flex overflow-hidden rounded-lg">
                            <Image
                              src="/images/books/destinies.png"
                              alt="Book name"
                              width={100}
                              height={0}
                              className="block sm:hidden"
                            />
                            <Image
                              src="/images/books/destinies.png"
                              alt="Book name"
                              width={200}
                              height={0}
                              className="hidden sm:block"
                            />
                          </div>
                        </Link>
                      </td>
                      <td className="inline-flex py-2 pr-6">
                        <div className="relative flex flex-col items-center rounded-xl ring-1 ring-gray-300 sm:flex-row">
                          <button
                            type="button"
                            id="decrement-button"
                            data-input-counter-decrement="quantity-input"
                            className="inline-flex items-center justify-center p-3 sm:px-4 sm:py-2"
                          >
                            <MinusSignIcon size={18} />
                          </button>
                          <input
                            type="text"
                            id="quantity-input"
                            data-input-counter
                            aria-describedby="helper-text-explanation"
                            className="block h-11 w-11 py-2.5 text-center text-sm text-black outline-none sm:h-12 sm:w-16 sm:text-base"
                            placeholder="999"
                            required
                          />
                          <button
                            type="button"
                            id="increment-button"
                            data-input-counter-increment="quantity-input"
                            className="inline-flex items-center justify-center p-3 sm:px-4 sm:py-2"
                          >
                            <PlusSignIcon size={18} />
                          </button>
                        </div>
                      </td>
                      <td className="py-2 pr-6 sm:pr-0 sm:text-right sm:align-baseline">
                        <span className="inline-flex items-center gap-1 sm:text-right sm:text-base">
                          <span className="font-bold text-black sm:text-xl">
                            9.99€
                          </span>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </aside>
          <aside className="mb-1 flex flex-col gap-5 rounded-lg p-4 ring-1 ring-gray-200 sm:w-1/3 sm:justify-between sm:gap-10">
            {/* Totals */}
            <ul className="flex flex-col gap-3 divide-y divide-dashed">
              <ul className="flex flex-col gap-3">
                <li className="flex justify-between">
                  <span className="font-normal text-gray-500">Subtotal</span>
                  <span className="inline-flex items-center gap-1">
                    <span className="text-xs font-light text-gray-500 line-through sm:text-sm">
                      29.99€
                    </span>
                    <span className="font-bold text-black sm:text-xl">
                      9.99€
                    </span>
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="font-normal text-gray-500">Discount</span>
                  <span className="font-bold text-black sm:text-xl">0€</span>
                </li>
              </ul>
              <li className="flex justify-between pt-3">
                <span className="font-normal text-black">Grand total</span>
                <span className="inline-flex items-center gap-1">
                  <span className="text-sm font-light text-gray-500 line-through">
                    29.99€
                  </span>
                  <span className="text-2xl font-bold text-black">9.99€</span>
                </span>
              </li>
            </ul>

            {/* Checkout */}
            <button className="flex items-center justify-center gap-2 rounded-lg bg-secondary-800 py-3 text-white">
              <span className="relative top-[2px] text-lg font-bold">
                Checkout now
              </span>
              <ShoppingBasketDone01Icon
                size={22}
                strokeWidth={2}
                color="#fff"
              />
            </button>
          </aside>
        </div>
      </div>
    </section>
  )
}
