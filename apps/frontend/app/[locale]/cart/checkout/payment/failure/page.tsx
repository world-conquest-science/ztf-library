import { CancelCircleHalfDotIcon, Payment02Icon } from 'hugeicons-react'
import Link from 'next/link'
import React from 'react'

const PaymentFailurePage = () => {
  return (
    <section className="mt-6">
      <div className="container mx-auto sm:max-w-[30vw]">
        <div className="mb-1 flex flex-col rounded-lg px-6 ring-0 ring-gray-200 sm:py-3 sm:ring-1">
          <header className="flex flex-col border-b border-dashed border-gray-200 py-3">
            <CancelCircleHalfDotIcon size={42} strokeWidth={2} color="#ef4444" />
            <h6 className="mt-1 text-2xl font-bold">We could not place your order...</h6>
            <p className="font-light text-gray-500">
              Please check your bank balance and retry the payment.
            </p>
          </header>
          <div className="flex flex-col gap-5 py-3">
            <ul className="flex flex-col gap-3 divide-y divide-dashed">
              <ul className="flex flex-col gap-3">
                <li className="flex justify-between">
                  <span className="font-normal text-gray-500">Subtotal</span>
                  <span className="font-bold text-black sm:text-xl">0€</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-normal text-gray-500">Discount applied</span>
                  <span className="font-bold text-black sm:text-xl">0€</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-normal text-gray-500">Shipment cost</span>
                  <span className="font-bold text-black sm:text-xl">0€</span>
                </li>
              </ul>
              <li className="flex justify-between pt-3">
                <span className="font-normal text-black">Grand total</span>
                <span className="font-bold text-black sm:text-xl">0€</span>
              </li>
            </ul>

            {/* Retry payment */}
            <Link
              href=""
              className="flex items-center justify-center gap-2 rounded-lg bg-accent-800 py-3 text-white"
            >
              <span className="relative top-[2px] text-lg font-bold">Retry payment</span>
              <Payment02Icon size={22} strokeWidth={2} color="#fff" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PaymentFailurePage
