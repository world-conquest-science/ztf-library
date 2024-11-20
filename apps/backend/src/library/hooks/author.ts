import { useEffect, useState } from 'react'

import {
  createAuthor,
  deleteAuthor,
  getAuthors,
  updateAuthor,
} from '../api/author'
import { TAuthor } from '../types'

const useAuthor = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [authors, setAuthors] = useState<TAuthor[]>([])

  const fetch = () =>
    getAuthors()
      .then(({ data }) => setAuthors(data as TAuthor[]))
      .finally(() => setIsLoading(false))

  useEffect(() => {
    fetch()
  }, [])

  return {
    create: createAuthor,
    update: updateAuthor,
    remove: deleteAuthor,
    refetch: fetch,
    isLoading,
    authors,
  }
}

export { useAuthor }
