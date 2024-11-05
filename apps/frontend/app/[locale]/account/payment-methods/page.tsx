import { Input } from '@headlessui/react'
import { CreditCardAddIcon, Delete02Icon, Payment02Icon, WalletDone01Icon } from 'hugeicons-react'
import Image from 'next/image'
import React from 'react'

const YourPaymentMethodsPage = () => {
  return (
    <div>
      <header className="my-3 flex items-center gap-2 sm:mb-10 sm:mt-5">
        <Payment02Icon size={30} className="relative top-[-2px]" strokeWidth={2} />
        <h1 className="text-2xl font-bold sm:text-3xl">Your payment methods</h1>
      </header>
      <div className="mt-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
          <div className="w-full sm:w-1/3">
            {/* Add a new credit card */}
            <div className="flex w-full flex-col gap-5">
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

            <button className="mt-6 flex w-fit items-center gap-2 rounded-full bg-accent-800 px-5 py-3 font-bold text-white">
              <span>Add a new credit card</span>
              <CreditCardAddIcon size={20} strokeWidth={2} />
            </button>
          </div>

          <div className="w-full sm:w-1/3">
            <ul className="flex w-full flex-col gap-5">
              <li className="flex flex-col rounded-lg bg-primary-100 p-4 ring-1 ring-primary-200">
                <div className="flex items-center gap-3">
                  <Image src="/images/mastercard-logo.svg" width={50} height={0} alt="Mastercard" />
                  <h6 className="inline-flex text-lg font-semibold">
                    Master card ending with 5816
                  </h6>
                </div>
                <div className="mt-5 flex gap-3">
                  <div className="inline-flex items-center gap-1 rounded-full bg-primary-200 px-2 py-1 tracking-tighter text-primary-900">
                    <span className="relative top-[1px] font-semibold">Default credit card</span>
                  </div>
                  <button className="inline-flex items-center gap-1 rounded-full px-2 py-1">
                    <span className="relative top-[1px] font-semibold">Delete</span>
                    <Delete02Icon strokeWidth={2} size={18} />
                  </button>
                </div>
              </li>
              <li className="flex flex-col rounded-lg bg-gray-50 p-4 ring-1 ring-gray-200">
                <div className="flex items-center gap-3">
                  <Image src="/images/visa-logo.svg" width={50} height={0} alt="Visa" />
                  <h6 className="inline-flex text-lg font-semibold">Visa card ending with 5816</h6>
                </div>
                <div className="mt-5 flex gap-3">
                  <button className="inline-flex items-center gap-1 rounded-full bg-accent-200 px-2 py-1 text-accent-900">
                    <span className="relative top-[1px] font-semibold">Set as default</span>
                    <WalletDone01Icon strokeWidth={2} size={18} />
                  </button>
                  <button className="inline-flex items-center gap-1 rounded-full px-2 py-1">
                    <span className="relative top-[1px] font-semibold">Delete</span>
                    <Delete02Icon strokeWidth={2} size={18} />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YourPaymentMethodsPage
