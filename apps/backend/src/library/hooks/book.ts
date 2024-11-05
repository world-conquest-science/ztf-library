import { useEffect, useState } from 'react'

import { getAllBooks } from '../api/book'
import { TBookWithTitle } from '../types'

const useBook = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [books, setBooks] = useState<TBookWithTitle[]>([])

  const fetch = () =>
    getAllBooks()
      .then(({ data }) => setBooks(data as TBookWithTitle[]))
      .finally(() => setIsLoading(false))

  useEffect(() => {
    fetch()
  }, [])

  return {
    refetch: fetch,
    isLoading,
    books,
  }
}

export { useBook }
