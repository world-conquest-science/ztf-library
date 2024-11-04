import React from 'react'
import { Search01Icon } from 'hugeicons-react'
import { useTranslations } from 'next-intl'
import { Input } from '@headlessui/react'

const Searchbar = () => {
  const t = useTranslations('Header.SearchBar')

  return (
    <div className="flex h-12 w-full items-center gap-3 overflow-hidden rounded-full border border-gray-200 bg-white px-4 sm:min-w-[650px]">
      <Search01Icon size={20} opacity={0.3} />
      <Input
        type="search"
        className="h-full w-full font-light outline-none"
        placeholder={t('placeholder')}
      />
    </div>
  )
}

export { Searchbar }
