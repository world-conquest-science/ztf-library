import { Input } from '@headlessui/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SignInPage = () => {
  const t = useTranslations('Authentication.SignIn')
  const gTrans = useTranslations('Global')

  return (
    <>
      <header>
        <h1 className="text-2xl font-bold text-black sm:text-5xl">{t('title')}</h1>
        <p className="text-sm text-gray-600 sm:text-xl">{t('description')}</p>
      </header>

      {/* Auth providers */}
      <div className="mt-3 flex gap-5 sm:gap-7">
        <div className="w-full">
          <Link
            href=""
            className="flex items-center gap-2 rounded-lg px-4 py-3 text-gray-800 ring-1 ring-gray-200 sm:gap-3 sm:p-4"
          >
            <Image src="/images/google-logo.png" width={30} height={30} alt="" />
            <span className="relative top-[2px] text-base font-bold sm:text-lg">Google</span>
          </Link>
        </div>
        <div className="w-full">
          <Link
            href=""
            className="flex items-center gap-2 rounded-lg px-4 py-3 text-gray-800 ring-1 ring-gray-200 sm:gap-3 sm:p-4"
          >
            <Image src="/images/facebook-logo.svg" width={30} height={30} alt="" />
            <span className="relative top-[2px] text-base font-bold sm:text-lg">Facebook</span>
          </Link>
        </div>
      </div>

      {/* Email and password */}
      <div className="my-3 flex flex-col gap-5 sm:gap-7">
        <p className="text-sm text-gray-600 sm:text-lg">{t('continue-with-email-password')}</p>
        <div className="w-full">
          <div className="relative flex w-full flex-col">
            <label className="text-sm sm:text-lg">{gTrans('userForm.email.label')}</label>
            <Input
              className="block w-full rounded-lg border-none p-3 text-base outline-none ring-1 ring-gray-200 sm:p-5 sm:text-lg"
              placeholder=""
            />
          </div>
        </div>
        <div className="w-full">
          <div className="relative flex w-full flex-col">
            <label className="text-sm sm:text-lg">{gTrans('userForm.password.label')}</label>
            <Input
              className="block w-full rounded-lg border-none p-3 text-base outline-none ring-1 ring-gray-200 sm:p-5 sm:text-lg"
              placeholder=""
              type="password"
            />
            <Link
              href=""
              className="mt-2 inline-flex self-end text-sm font-bold text-primary-700 underline underline-offset-2 sm:text-base"
            >
              {t('forgot-password')}
            </Link>
          </div>
        </div>
        <button className="mt-2 flex w-full justify-center rounded-full bg-primary-700 py-3 text-base font-bold text-white sm:py-5 sm:text-lg">
          {t('cta')}
        </button>
      </div>

      {/* Sign up here */}
      <div className="inline-flex flex-col items-center sm:items-start">
        <p className="text-sm sm:text-base">{t('create-account-prefix')}</p>
        <Link href="" className="font-bold text-primary-700 underline underline-offset-2">
          {t('create-account')}
        </Link>
      </div>
    </>
  )
}

export default SignInPage
