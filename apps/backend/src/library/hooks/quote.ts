import { useEffect, useState } from 'react'

import { createQuote, deleteQuote, getQuotes, updateQuote } from '../api/quote'
import { TQuote } from '../types'

const useQuote = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [quotes, setQuotes] = useState<TQuote[]>([])

  const fetch = () =>
    getQuotes()
      .then(({ data }) => setQuotes(data))
      .finally(() => setIsLoading(false))

  useEffect(() => {
    fetch()
  }, [])

  return {
    create: createQuote,
    update: updateQuote,
    remove: deleteQuote,
    refetch: fetch,
    isLoading,
    quotes,
  }
}

export { useQuote }
