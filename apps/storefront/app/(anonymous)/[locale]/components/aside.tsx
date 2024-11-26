'use client'

import { Logo } from '@/app/components/Logo'
import Link from 'next/link'
import {
  ArrowLeft02Icon,
  LanguageSkillIcon,
  QuoteDownIcon,
} from 'hugeicons-react'
import { useTranslations, useLocale } from 'next-intl'
import { startTransition } from 'react'
import { TLocale, usePathname, useRouter } from '@/app/i18n/routing'

export default function Aside() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale() as TLocale

  const trans = useTranslations('Authentication')

  const switchLocale = () => {
    startTransition(() => {
      router.replace(pathname, { locale: currentLocale === 'en' ? 'fr' : 'en' })
    })
  }

  return (
    <aside className="flex min-h-[75vh] w-full flex-col justify-between bg-background-base p-6 sm:w-2/3 sm:rounded-lg sm:p-12">
      <div className="pr-6">
        <header className="mb-2 flex flex-col-reverse sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="block sm:hidden">
            <Logo theme="colored" variant="full" width={150} />
          </div>
          <div className="hidden sm:block">
            <Logo theme="colored" variant="full" width={170} />
          </div>
          <div className="flex gap-8">
            <Link href="" className="inline-flex gap-1">
              <ArrowLeft02Icon className="size-4 sm:mt-[2px] sm:size-5" />
              <span className="relative top-[1px] text-xs sm:text-base">
                {trans('back-to-homepage')}
              </span>
            </Link>
            <button
              type="button"
              className="inline-flex gap-2 tracking-normal"
              onClick={switchLocale}
            >
              <LanguageSkillIcon className="size-4 sm:size-5" />
              <span className="relative top-[1px] text-xs sm:text-base">
                {trans('switch-language')}
              </span>
            </button>
          </div>
        </header>
        <h1 className="text-3xl font-bold sm:mb-6 sm:w-2/3 sm:text-6xl">
          {trans('headline')}
        </h1>
        <p className="text-base font-light opacity-65 sm:mt-3 sm:w-2/3 sm:text-2xl sm:leading-relaxed sm:opacity-100">
          {trans('description')}
        </p>
      </div>
      <div className="relative overflow-hidden rounded-lg bg-primary-900 p-5 text-white sm:w-2/3 sm:p-8">
        <p className="font-secondary text-sm font-normal sm:text-2xl sm:font-light sm:leading-normal">
          Replace this text with a quote from API
        </p>
        <h6 className="mt-6 text-sm font-bold sm:text-xl">
          <Link href="">From The way of life</Link>
        </h6>
        <h5 className="text-sm font-light sm:text-xl">
          By Zacharias Tanee Fomum
        </h5>
        <QuoteDownIcon
          size={100}
          color="#fff"
          fill="#fff"
          className="absolute -bottom-[30px] right-[30px] opacity-5"
        />
      </div>
    </aside>
  )
}
