import api from '@ztf-library/api'

export const BOOKS_COUNT_PER_PAGE = 20

export async function fetchPaginatedBooks() {
  return api
    .with(process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY)
    .book.getAllBooks({
      limit: BOOKS_COUNT_PER_PAGE,
      offset: 0,
    })
}
