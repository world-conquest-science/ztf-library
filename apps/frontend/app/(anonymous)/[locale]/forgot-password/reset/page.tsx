import { Input } from '@headlessui/react'
import { useTranslations } from 'next-intl'
import React from 'react'

const ResetPasswordPage = () => {
  const t = useTranslations('Authentication.ResetPassword')

  return (
    <>
      <header>
        <h1 className="text-2xl font-bold text-black sm:text-5xl">{t('title')}</h1>
        <p className="text-sm text-gray-600 sm:text-xl">{t('description')}</p>
      </header>

      {/* New password fields */}
      <div className="my-3 flex flex-col gap-5 sm:gap-7">
        <div className="w-full">
          <div className="relative flex w-full flex-col">
            <label className="text-sm sm:text-xl">{t('form.new-password.label')}</label>
            <Input
              className="block w-full rounded-lg border-none p-3 text-base outline-none ring-1 ring-gray-200 sm:p-4 sm:text-lg"
              placeholder=""
              type="password"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="relative flex w-full flex-col">
            <label className="text-sm sm:text-xl">
              {t('form.new-password-confirmation.label')}
            </label>
            <Input
              className="block w-full rounded-lg border-none p-3 text-base outline-none ring-1 ring-gray-200 sm:p-4 sm:text-lg"
              placeholder=""
              type="password"
            />
          </div>
        </div>
        <button className="mt-2 flex w-full justify-center rounded-full bg-primary-700 py-3 text-base font-bold text-white sm:py-5 sm:text-lg">
          {t('cta')}
        </button>
      </div>
    </>
  )
}

export default ResetPasswordPage
