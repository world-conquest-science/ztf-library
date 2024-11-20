import { CheckmarkBadge01Icon } from 'hugeicons-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function PaymentSuccessPage() {
  return (
    <section className="mt-6">
      <div className="container mx-auto sm:max-w-[30vw]">
        <div className="mb-1 flex flex-col rounded-lg px-6 ring-0 ring-gray-200 sm:py-3 sm:ring-1">
          <header className="flex flex-col border-b border-dashed border-gray-200 py-3">
            <CheckmarkBadge01Icon size={42} strokeWidth={2} color="#16a34a" />
            <h6 className="mt-1 text-2xl font-bold">Thanks for your order!</h6>
            <p className="font-light text-gray-500">
              The order confirmation has been sent to
              akakpo.jeanjacques@gmail.com
            </p>
          </header>
          <div className="flex flex-col border-b border-dashed border-gray-200 py-3">
            <h6 className="text-lg font-semibold">Transaction date</h6>
            <p className="text-base font-normal text-gray-500">
              Thursday, 17 november 2024 at 12:34 PM
            </p>
          </div>
          <div className="flex flex-col border-b border-dashed border-gray-200 py-3">
            <h6 className="text-lg font-semibold">Payment method</h6>
            <p className="text-base font-normal text-gray-500">
              Visa credit card ending with 2617
            </p>
          </div>
          <div className="flex flex-col border-b border-dashed border-gray-200 py-3">
            <h6 className="text-lg font-semibold">Shipping method</h6>
            <p className="text-base font-normal text-gray-500">
              Express delivery (1-3 business days)
            </p>
            <Link
              href=""
              className="font-bold tracking-tighter underline underline-offset-2"
            >
              Track order
            </Link>
          </div>
          <div className="flex flex-col border-b border-dashed border-gray-200 py-3">
            <h6 className="mb-5 font-semibold">Your order</h6>

            <ul className="flex flex-col gap-3 pb-5">
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
                    <h6 className="font-medium text-black sm:text-lg">
                      Roots and destinies
                    </h6>
                    <span className="text-xs text-gray-500 sm:text-sm">
                      Paperback
                    </span>
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
                    <span className="text-xs text-gray-500 sm:text-sm">
                      Paperback
                    </span>
                    <span className="text-xs text-black sm:text-sm">x1</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5 py-3">
            <ul className="flex flex-col gap-3 divide-y divide-dashed">
              <ul className="flex flex-col gap-3">
                <li className="flex justify-between">
                  <span className="font-normal text-gray-500">Subtotal</span>
                  <span className="font-bold text-black sm:text-xl">0€</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-normal text-gray-500">
                    Discount applied
                  </span>
                  <span className="font-bold text-black sm:text-xl">0€</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-normal text-gray-500">
                    Shipment cost
                  </span>
                  <span className="font-bold text-black sm:text-xl">0€</span>
                </li>
              </ul>
              <li className="flex justify-between pt-3">
                <span className="font-normal text-black">Grand total</span>
                <span className="font-bold text-black sm:text-xl">0€</span>
              </li>
            </ul>

            {/* Continue to payment */}
            <button className="flex items-center justify-center gap-2 rounded-lg bg-secondary-800 py-3 text-white">
              <span className="relative top-[2px] text-lg font-bold">
                Continue shopping
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
