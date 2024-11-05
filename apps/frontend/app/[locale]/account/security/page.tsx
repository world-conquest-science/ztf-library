import { PencilEdit01Icon, SecurityLockIcon } from 'hugeicons-react'
import { useTranslations } from 'next-intl'
import React from 'react'

const SecurityPage = () => {
  const t = useTranslations('AccountSettings.login-and-security')
  const gTrans = useTranslations('Global.userForm')

  return (
    <div>
      <header className="my-3 flex items-center gap-2 sm:mb-10 sm:mt-5">
        <SecurityLockIcon size={30} className="relative top-[-2px]" strokeWidth={2} />
        <h1 className="text-2xl font-bold sm:text-3xl">{t('title')}</h1>
      </header>
      <div className="mt-6">
        <ul className="flex w-full flex-col gap-5 sm:flex-row sm:flex-wrap sm:gap-8">
          <li className="rounded-lg px-4 py-3 ring-1 ring-gray-200 sm:w-1/2">
            <label htmlFor="helper-text" className="text-base font-semibold sm:text-lg">
              {gTrans('fullName.label')}
            </label>
            <div className="mt-1 flex rounded-lg bg-gray-100 px-3">
              <input
                type="text"
                autoComplete="name"
                className="block w-full bg-transparent py-3 text-base outline-none sm:text-lg"
                placeholder=""
              />
              <button className="px-2">
                <PencilEdit01Icon />
              </button>
            </div>
            <p className="mt-2 text-sm sm:text-base">{gTrans('fullName.update-caution')}</p>
          </li>
          <li className="rounded-lg px-4 py-3 ring-1 ring-gray-200 sm:w-1/2">
            <label htmlFor="helper-text" className="text-base font-semibold sm:text-lg">
              {gTrans('email.label')}
            </label>
            <div className="mt-1 flex rounded-lg bg-gray-100 px-3">
              <input
                type="email"
                autoComplete="email"
                className="block w-full bg-transparent py-3 text-base outline-none sm:text-lg"
                placeholder=""
              />
              <button className="px-2">
                <PencilEdit01Icon />
              </button>
            </div>
            <p className="mt-2 text-sm sm:text-base">{gTrans('email.update-caution')}</p>
          </li>
          <li className="rounded-lg px-4 py-3 ring-1 ring-gray-200 sm:w-1/2">
            <label htmlFor="helper-text" className="text-base font-semibold sm:text-lg">
              {gTrans('phone-number.label')}
            </label>
            <div className="mt-1 flex rounded-lg bg-gray-100 px-3">
              <input
                type="tel"
                autoComplete="tel"
                className="block w-full bg-transparent py-3 text-base outline-none sm:text-lg"
                placeholder=""
              />
              <button className="px-2">
                <PencilEdit01Icon />
              </button>
            </div>
            <p className="mt-2 text-sm sm:text-base">{gTrans('phone-number.update-caution')}</p>
          </li>
          <li className="rounded-lg px-4 py-3 ring-1 ring-gray-200 sm:w-1/2">
            <label htmlFor="helper-text" className="text-base font-semibold sm:text-lg">
              {gTrans('password.label')}
            </label>
            <div className="mt-1 flex rounded-lg bg-gray-100 px-3">
              <input
                type="password"
                autoComplete="current-password"
                className="block w-full bg-transparent py-3 text-base outline-none sm:text-lg"
                placeholder=""
              />
              <button className="px-2">
                <PencilEdit01Icon />
              </button>
            </div>
            <p className="mt-2 text-sm sm:text-base">{gTrans('password.update-caution')}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SecurityPage
