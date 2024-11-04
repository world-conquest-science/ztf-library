'use client'

import { Checkbox, Input, Select } from '@headlessui/react'
import { ArrowDown01Icon, PackageMovingIcon, Tick02Icon } from 'hugeicons-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PaymentPage = () => {
  return (
    <section className="mt-6">
      <div className="container mx-auto">
        <div className="flex flex-col gap-5 px-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10 sm:px-0">
          <aside className="sm:w-2/3">
            {/* Header */}
            <header className="mb-3 flex justify-between">
              <h6 className="text-2xl font-bold sm:text-3xl">Payment</h6>

              <div className="hidden items-center gap-2 sm:flex">
                <Checkbox
                  checked={true}
                  onChange={() => {}}
                  className="group inline-flex size-5 items-center justify-center rounded-md ring-1 ring-inset ring-black"
                >
                  <Tick02Icon className="block size-4" strokeWidth={2} />
                </Checkbox>
                <span className="relative top-[1px] text-sm font-semibold">
                  Save my information for future checkout
                </span>
              </div>
            </header>

            <div className="flex flex-col gap-5 sm:flex sm:flex-row sm:items-start sm:gap-10">
              {/* Payment methods */}
              <div className="flex flex-col gap-5 rounded-lg p-4 ring-1 ring-gray-200 sm:flex sm:w-1/2">
                {/* Credit card */}
                <div className="flex w-full flex-col gap-5">
                  <h6 className="font-semibold">Credit card</h6>
                  <div className="flex flex-col gap-5">
                    <div className="w-full">
                      <div className="relative flex w-full flex-col">
                        <Input
                          className="block w-full rounded-lg border-none px-3 py-2 ring-1 ring-gray-200 sm:py-3"
                          value=""
                          placeholder="Card number"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="relative flex w-full flex-col">
                        <Input
                          className="block w-full rounded-lg border-none px-3 py-2 ring-1 ring-gray-200 sm:py-3"
                          value=""
                          placeholder="Name on card"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-5 sm:flex-row">
                      <div className="w-full">
                        <div className="relative flex w-full flex-col">
                          <Input
                            className="block w-full rounded-lg border-none px-3 py-2 ring-1 ring-gray-200 sm:py-3"
                            value=""
                            placeholder="Expiration date (MM/YY)"
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="relative flex w-full flex-col">
                          <Input
                            className="block w-full rounded-lg border-none px-3 py-2 ring-1 ring-gray-200 sm:py-3"
                            placeholder="CVV"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Billing address */}
              <div className="flex flex-col gap-5 rounded-lg p-4 ring-1 ring-gray-200 sm:w-1/2">
                {/* Address */}
                <h6 className="font-semibold">Billing address</h6>

                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={true}
                    onChange={() => {}}
                    className="group inline-flex size-5 items-center justify-center rounded-md ring-1 ring-inset ring-black"
                  >
                    <Tick02Icon className="block size-4" strokeWidth={2} />
                  </Checkbox>
                  <span className="relative top-[1px] text-sm font-semibold">
                    Same as my shipping address
                  </span>
                </div>

                {/* Full name */}
                <div className="w-full">
                  <div className="relative flex w-full flex-col">
                    <label className="text-sm sm:text-base">Full name</label>
                    <Input
                      className="block w-full rounded-lg border-none px-3 py-2 ring-1 ring-gray-200 sm:py-3"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-5 sm:flex-row">
                  {/* Email address */}
                  <div className="w-full">
                    <div className="relative flex w-full flex-col">
                      <label className="text-sm sm:text-base">Email address</label>
                      <Input
                        className="block w-full rounded-lg border-none px-3 py-2 ring-1 ring-gray-200 sm:py-3"
                        value=""
                        placeholder="john.doe@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone number */}
                  <div className="w-full">
                    <div className="relative flex w-full flex-col">
                      <label className="text-sm sm:text-base">Phone number</label>
                      <Input
                        className="block w-full rounded-lg border-none px-3 py-2 ring-1 ring-gray-200 sm:py-3"
                        placeholder="+33 01 23 45 67 89"
                      />
                    </div>
                  </div>
                </div>

                {/* Street name and house number */}
                <div className="w-full">
                  <div className="relative flex w-full flex-col">
                    <label className="text-sm">Street name and house number</label>
                    <Input
                      className="block w-full rounded-lg border-none px-3 py-2 ring-1 ring-gray-200 sm:py-3"
                      placeholder="1234 Road of Americans"
                    />
                  </div>
                </div>

                <div className="flex gap-5">
                  {/* City */}
                  <div className="w-full">
                    <div className="relative flex w-full flex-col">
                      <label className="text-sm">City</label>
                      <Input
                        className="block w-full rounded-lg border-none px-3 py-2 ring-1 ring-gray-200 sm:py-3"
                        value=""
                        placeholder="Paris"
                      />
                    </div>
                  </div>

                  {/* Postal code */}
                  <div className="w-full">
                    <div className="relative flex w-full flex-col">
                      <label className="text-sm">Postal code</label>
                      <Input
                        className="block w-full rounded-lg border-none px-3 py-2 ring-1 ring-gray-200 sm:py-3"
                        placeholder="12345"
                      />
                    </div>
                  </div>
                </div>

                {/* Country */}
                <div className="w-full">
                  <label className="text-sm">Shipping country</label>
                  <div className="relative flex w-full items-center rounded-lg ring-1 ring-gray-200">
                    <Select className="block w-full appearance-none rounded-lg border-none px-3 py-2 text-base outline-none sm:py-3 sm:text-lg">
                      <option selected value="">
                        Select country
                      </option>
                      <option value="active">France</option>
                      <option value="paused">Germany</option>
                      <option value="delayed">Ivory Coast</option>
                      <option value="canceled">Cameroun</option>
                    </Select>
                    <ArrowDown01Icon className="pointer-events-none mr-3" aria-hidden="true" />
                  </div>
                </div>
              </div>

              {/* Remember */}
              <div className="flex flex-col gap-4 rounded-lg p-4 ring-1 ring-gray-200 sm:mt-0 sm:hidden sm:w-1/3">
                <h6 className="font-semibold">Remember my information</h6>

                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={true}
                    onChange={() => {}}
                    className="group inline-flex size-5 items-center justify-center rounded-md ring-1 ring-inset ring-black"
                  >
                    <Tick02Icon className="block size-4" strokeWidth={2} />
                  </Checkbox>
                  <span className="relative top-[1px] text-sm font-semibold">
                    Save my information for future checkout
                  </span>
                </div>
              </div>
            </div>
          </aside>
          <aside className="mb-1 flex flex-col gap-5 rounded-lg p-4 ring-1 ring-gray-200 sm:w-1/3 sm:justify-between sm:gap-10">
            {/* Order */}
            <div>
              <h6 className="mb-5 font-semibold">Your order</h6>

              <ul className="flex flex-col gap-3 border-b border-dashed border-gray-200 pb-5">
                <li className="flex justify-between">
                  <Link href={'url'} className="inline-flex">
                    <div className="inline-flex overflow-hidden rounded-lg">
                      <Image
                        src="/images/books/destinies.png"
                        alt="Book name"
                        width={75}
                        height={0}
                        className="block sm:hidden"
                      />
                      <Image
                        src="/images/books/destinies.png"
                        alt="Book name"
                        width={100}
                        height={0}
                        className="hidden sm:block"
                      />
                    </div>
                    <div className="flex flex-col px-3 py-2">
                      <h6 className="font-medium text-black sm:text-lg">Roots and destinies</h6>
                      <span className="text-xs text-gray-500 sm:text-sm">Paperback</span>
                      <span className="text-xs text-black sm:text-sm">x2</span>
                    </div>
                  </Link>
                </li>
                <li className="flex justify-between">
                  <Link href={'url'} className="inline-flex">
                    <div className="inline-flex overflow-hidden rounded-lg">
                      <Image
                        src="/images/books/laziness.png"
                        alt="Book name"
                        width={75}
                        height={0}
                        className="block sm:hidden"
                      />
                      <Image
                        src="/images/books/laziness.png"
                        alt="Book name"
                        width={100}
                        height={0}
                        className="hidden sm:block"
                      />
                    </div>
                    <div className="flex flex-col px-3 py-2">
                      <h6 className="font-medium text-black sm:text-lg">
                        Deliverance from the sin of laziness
                      </h6>
                      <span className="text-xs text-gray-500 sm:text-sm">Paperback</span>
                      <span className="text-xs text-black sm:text-sm">x1</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Totals */}
            <ul className="flex flex-col gap-3 divide-y divide-dashed">
              <ul className="flex flex-col gap-3">
                <li className="flex justify-between">
                  <span className="font-normal text-gray-500">Subtotal</span>
                  <span className="inline-flex items-center gap-1">
                    <span className="text-xs font-light text-gray-500 line-through sm:text-sm">
                      29.99€
                    </span>
                    <span className="font-bold text-black sm:text-xl">9.99€</span>
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
                  <span className="text-sm font-light text-gray-500 line-through">29.99€</span>
                  <span className="text-2xl font-bold text-black">9.99€</span>
                </span>
              </li>
            </ul>

            {/* Continue to payment */}
            <button className="flex items-center justify-center gap-2 rounded-lg bg-secondary-800 py-3 text-white">
              <span className="relative top-[2px] text-lg font-bold">Place order now</span>
              <PackageMovingIcon size={22} strokeWidth={2} color="#fff" />
            </button>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default PaymentPage
