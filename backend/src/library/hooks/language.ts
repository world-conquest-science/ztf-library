import { useEffect, useState } from 'react'

import { createLanguage, deleteLanguage, getLanguages, updateLanguage } from '../api/language'
import { TLanguage } from '../types'

const useLanguage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [languages, setLanguages] = useState<TLanguage[]>([])

  const fetch = () =>
    getLanguages()
      .then(({ data }) => setLanguages(data))
      .finally(() => setIsLoading(false))

  useEffect(() => {
    fetch()
  }, [])

  return {
    create: createLanguage,
    update: updateLanguage,
    remove: deleteLanguage,
    refetch: fetch,
    isLoading,
    languages,
  }
}

export { useLanguage }
