'use client'

import React, { useTransition } from 'react'
import Link from 'next/link'
import {
  ArrowUp01Icon,
  ChampionIcon,
  Facebook02Icon,
  LanguageSkillIcon,
  InstagramIcon,
  LibraryIcon,
  NewTwitterIcon,
  Tag01Icon,
  YoutubeIcon,
} from 'hugeicons-react'
import { useTranslations, useLocale } from 'next-intl'
import { TLocale, usePathname, useRouter } from '@/app/i18n/routing'
import { Routes } from '@/app/config/routes'

type TFooterLink = {
  href: string
  label?: string
  Icon?: JSX.Element
}

const FooterStandingLink = ({ href, label, Icon }: TFooterLink) => {
  return (
    <li>
      <Link href={href} className="inline-flex gap-2 text-xl font-semibold">
        {Icon}
        <span>{label}</span>
      </Link>
    </li>
  )
}

const FooterLink = ({ href, label }: TFooterLink) => {
  return (
    <li>
      <Link href={href} className="text-base">
        {label}
      </Link>
    </li>
  )
}

const FooterSocialLink = ({ href, Icon }: TFooterLink) => {
  return (
    <li>
      <a href={href} className="inline-flex p-2">
        {Icon}
      </a>
    </li>
  )
}

export const Footer = () => {
  const currentLocale = useLocale() as TLocale
  const router = useRouter()
  const pathname = usePathname()
  const [isSwitchingLocale, startTransition] = useTransition()

  const t = useTranslations('Footer')

  const standingLinks: TFooterLink[] = [
    {
      label: t('best-sellers'),
      Icon: <ChampionIcon size={26} />,
      href: Routes.BestSellers,
    },
    {
      label: t('special-offers'),
      Icon: <Tag01Icon size={26} />,
      href: Routes.SpecialOffers,
    },
    {
      label: t('all-categories'),
      Icon: <LibraryIcon size={26} />,
      href: Routes.AllCategories,
    },
  ]
  const links: TFooterLink[] = [
    {
      label: t('the-author'),
      href: 'https://ztfomum.org/',
    },
    {
      label: t('contact-us'),
      href: 'https://ztfomum.org/contacts/',
    },
    {
      label: t('privacy-policy'),
      href: 'https://ztfomum.org/privacy-policy/',
    },
    {
      label: t('terms-and-conditions'),
      href: 'https://ztfomum.org/terms-and-conditions/',
    },
    {
      label: t('cookies'),
      href: 'https://ztfomum.org/cookies/',
    },
  ]
  const socialLinks: TFooterLink[] = [
    {
      Icon: <YoutubeIcon />,
      href: 'https://www.youtube.com/@youthablaze777',
    },
    {
      Icon: <InstagramIcon />,
      href: 'https://www.instagram.com/our_fathers_words',
    },
    {
      Icon: <NewTwitterIcon />,
      href: 'https://x.com/ZTFomum',
    },
    {
      Icon: <Facebook02Icon />,
      href: 'https://www.facebook.com/profile.php?id=61561363873985',
    },
  ]

  const switchLocale = () => {
    startTransition(() => {
      router.replace(pathname, { locale: currentLocale === 'en' ? 'fr' : 'en' })
    })
  }

  return (
    <footer className="mt-32 flex bg-background-base px-6 py-16 sm:min-h-[350px] sm:px-0 sm:py-0">
      <div className="container mx-auto my-auto flex flex-col gap-3 sm:gap-14">
        <div className="flex flex-col gap-3">
          <ul className="mb-4 flex flex-col gap-6 sm:mb-0 sm:flex-row">
            {standingLinks.map(link => (
              <FooterStandingLink key={link.href} {...link} />
            ))}
          </ul>
          <div className="my-5 flex flex-col justify-between gap-5 sm:my-0 sm:flex-row sm:items-center sm:gap-0">
            <ul className="flex flex-col gap-8 sm:flex-row">
              {links.map(link => (
                <FooterLink key={link.href} {...link} />
              ))}
            </ul>

            <ul className="mt-2 flex w-full justify-evenly sm:mt-0 sm:w-auto sm:justify-normal">
              {socialLinks.map(link => (
                <FooterSocialLink key={link.href} {...link} />
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col-reverse gap-6 sm:flex-row sm:justify-between sm:gap-0">
          <span className="text-md sm:text-sm">
            &copy; {t('copyright-suffix', { year: 2024 })}
            <br />
            {t('all-right-reserved')}
          </span>
          <div className="flex flex-col gap-5 sm:flex-row">
            <button className="inline-flex gap-2 tracking-normal">
              <ArrowUp01Icon className="size-4 sm:size-5" />
              {t('back-to-top')}
            </button>
            <button
              type="button"
              className="inline-flex gap-2 tracking-normal"
              disabled={isSwitchingLocale}
              onClick={switchLocale}
            >
              <LanguageSkillIcon className="size-4 sm:size-5" />
              {t('switch-language')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
