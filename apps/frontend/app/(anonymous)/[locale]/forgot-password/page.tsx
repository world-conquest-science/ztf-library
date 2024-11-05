import React from 'react'
import { MailReceive01Icon, SmsCodeIcon } from 'hugeicons-react'
import { useTranslations } from 'next-intl'

const ForgotPasswordPage = () => {
  const t = useTranslations('Authentication.ForgotPassword')
  const gTrans = useTranslations('Global')

  return (
    <>
      <header>
        <h1 className="text-2xl font-bold text-black sm:text-5xl">{t('title')}</h1>
        <p className="text-sm text-gray-600 sm:text-xl">{t('description')}</p>
      </header>

      {/* Email or SMS */}
      <div className="my-3 flex w-full flex-col gap-5 sm:gap-10">
        <ul className="flex w-full flex-col gap-6">
          <li className="flex w-full">
            <button className="flex w-full flex-col items-start rounded-lg bg-primary-100 px-5 py-4 text-start ring-1 ring-primary-500">
              <div className="flex w-full items-start justify-between">
                <div className="w-full">
                  <MailReceive01Icon size={24} strokeWidth={2} />
                  <h6 className="mt-1 text-base font-semibold sm:text-lg">
                    {t('reset-via.email.label')}
                  </h6>
                </div>
                <span className="rounded-full bg-primary-200 px-2 py-1 text-xs font-bold text-primary-800 sm:text-sm">
                  {gTrans('selected')}
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-500 sm:text-base">
                {t('reset-via.email.description')}
              </p>
            </button>
          </li>
          <li className="flex w-full">
            <button className="flex w-full flex-col items-start rounded-lg bg-white px-5 py-4 text-start ring-1 ring-gray-200">
              <div className="flex w-full justify-between">
                <div className="w-full">
                  <SmsCodeIcon size={24} strokeWidth={2} />
                  <h6 className="mt-1 text-base font-semibold sm:text-lg">
                    {t('reset-via.sms.label')}
                  </h6>
                </div>
                <span></span>
              </div>
              <p className="mt-1 text-sm text-gray-500 sm:text-base">
                {t('reset-via.sms.description')}
              </p>
            </button>
          </li>
        </ul>

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

export default ForgotPasswordPage
