import { PackageMovingIcon } from 'hugeicons-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const YourOrdersPage = () => {
  const gTrans = useTranslations('Global')

  return (
    <div>
      <header className="my-3 flex items-center gap-2 sm:mb-10 sm:mt-5">
        <PackageMovingIcon size={30} className="relative top-[-2px]" strokeWidth={2} />
        <h1 className="text-2xl font-bold sm:text-3xl">{gTrans('last-orders')}</h1>
      </header>
      <div className="mt-6">
        <ul className="flex w-full flex-col gap-5 sm:flex-row sm:flex-wrap sm:gap-10">
          <li className="flex w-full flex-col overflow-hidden rounded-lg ring-1 ring-gray-200">
            <div className="flex flex-col gap-3 border-b border-gray-200 bg-gray-100 p-3 sm:flex-row sm:justify-between sm:px-6 sm:py-4">
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 sm:text-sm">{gTrans('ordered-at')}</span>
                <span className="text-base font-semibold sm:text-lg">8 october 2024</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 sm:text-sm">{gTrans('total')}</span>
                <span className="text-base font-semibold sm:text-lg">9.99€</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 sm:text-sm">{gTrans('dispatch-to')}</span>
                <span className="text-sm font-semibold sm:text-lg">Home address 1</span>
                <span className="text-base font-semibold sm:text-lg">
                  11 Rue de Strasbourg, 14200 Hérouville-Saint-Clair
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 sm:text-sm">{gTrans('order')}</span>
                <span className="text-base font-semibold sm:text-lg">817-10028J1HSA-19219</span>
                <div className="inline-flex gap-4">
                  <Link href="" className="font-semibold text-primary-600">
                    {gTrans('view-order-details')}
                  </Link>
                  <Link href="" className="font-semibold text-primary-600">
                    {gTrans('download-invoice')}
                  </Link>
                </div>
              </div>
            </div>
            <ul className="flex flex-col divide-y divide-dashed divide-gray-200 px-4 sm:px-6">
              <li className="flex w-full flex-col gap-3 py-5 sm:flex-row sm:justify-between">
                <div className="whitespace-nowrap py-2 font-medium text-gray-900 sm:py-0">
                  <Link href="url" className="inline-flex w-full gap-3 sm:gap-5">
                    <div className="inline-flex overflow-hidden rounded-lg">
                      <Image
                        src="/images/books/laziness.png"
                        alt="Book name"
                        width={100}
                        height={0}
                      />
                    </div>
                    <div className="inline-flex w-2/3 flex-col text-wrap pt-3">
                      <span className="inline-block text-base font-semibold text-primary-600 underline sm:text-lg">
                        Deliverance from the sin of laziness
                      </span>
                      <span className="inline-block text-xs text-gray-500 sm:text-sm">
                        Paperback
                      </span>
                      <span className="inline-block text-xs sm:text-sm">x3</span>
                    </div>
                  </Link>
                </div>
                <div className="inline-flex">
                  <div className="inline-flex flex-col items-start sm:flex-row sm:gap-5">
                    <Link
                      href="url"
                      className="inline-flex font-bold tracking-tighter text-primary-600 underline underline-offset-2 sm:text-lg"
                    >
                      <span>{gTrans('buy-again')}</span>
                    </Link>
                    <Link
                      href="url"
                      className="inline-flex font-bold tracking-tighter text-primary-600 underline underline-offset-2 sm:text-lg"
                    >
                      <span>{gTrans('view-book')}</span>
                    </Link>
                  </div>
                </div>
                <div>
                  <Link
                    href="url"
                    className="inline-flex font-bold tracking-tighter text-black underline underline-offset-2 sm:text-lg"
                  >
                    <span>{gTrans('track-order')}</span>
                  </Link>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default YourOrdersPage
