import { ArrowLeft02Icon } from 'hugeicons-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

export default async function VerifyCodePage() {
  const t = useTranslations('Authentication.VerifyCode')

  return (
    <>
      <header>
        <Link href="" className="mb-3 inline-flex gap-1 font-semibold">
          <ArrowLeft02Icon className="mt-[2px] size-4 sm:mt-0 sm:size-5" />
          {t('back')}
        </Link>
        <h1 className="text-2xl font-bold text-black sm:text-5xl">
          {t('title')}
        </h1>
        <p className="text-sm text-gray-600 sm:text-xl">{t('description')}</p>
      </header>

      {/* Verify account */}
      <div className="my-3 flex w-full flex-col gap-7 sm:gap-10">
        <div className="w-full">
          <ul className="flex w-full justify-between">
            <li className="inline-flex size-12 items-center justify-center rounded-lg bg-white pt-1 text-3xl font-bold text-black ring-2 ring-gray-100 sm:size-16">
              2
            </li>
            <li className="inline-flex size-12 items-center justify-center rounded-lg bg-white pt-1 text-3xl font-bold text-black ring-2 ring-gray-100 sm:size-16">
              3
            </li>
            <li className="inline-flex size-12 items-center justify-center rounded-lg bg-white pt-1 text-3xl font-bold text-black ring-2 ring-gray-100 sm:size-16">
              9
            </li>
            <li className="inline-flex size-12 items-center justify-center rounded-lg bg-white pt-1 text-3xl font-bold text-black ring-2 ring-gray-100 sm:size-16">
              1
            </li>
            <li className="inline-flex size-12 items-center justify-center rounded-lg bg-white pt-1 text-3xl font-bold text-black ring-2 ring-gray-100 sm:size-16">
              8
            </li>
            <li className="inline-flex size-12 items-center justify-center rounded-lg bg-white pt-1 text-3xl font-bold text-black ring-2 ring-gray-100 sm:size-16">
              3
            </li>
          </ul>
        </div>

        <p className="text-gray-600">
          {t('resend-code-prefix')}
          <button className="font-semibold text-primary-700 underline underline-offset-2">
            {t('resend-code')}
          </button>
        </p>

        <div className="flex flex-col gap-3 sm:flex-row-reverse">
          <button className="w-full rounded-full bg-primary-700 py-3 text-base font-bold text-white sm:w-2/3 sm:text-lg">
            {t('cta')}
          </button>
          <button className="w-full py-3 text-base font-bold text-black sm:w-1/3 sm:text-lg">
            {t('cancel')}
          </button>
        </div>
      </div>
    </>
  )
}
